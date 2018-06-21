import uuid from 'uuid';
import database from '../firebase/firebase';


//Component calls action generator
//Action generator returns object
//Component dispatches object
//Redux store changes

//new  way to work with Firebase
//Component calls action generator
//Action generator returns function
//Component dispatches function(?)
//Function runs (has the ability to dispatch other actions and do whatever it wants)

//ADD_EXPENSE - action generator function
//Original
// export const addExpense = (
//     {
//         description = '', 
//         note='', 
//         amount=0, 
//         createdAt=0
//     } = {}
//     ) =>({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: uuid(),
//             description,
//             note,
//             amount,
//             createdAt
//     }
// })

//adpated to use firebase
export const addExpense = (expense) =>({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    //this work because of redux-thunk.
    //its called internally by redux and its called with dispatch
    return (dispatch) => {
        const {
          description = '', 
          note='', 
          amount=0, 
          createdAt=0
        } = expenseData;

        const expense = {description, note, amount, createdAt};
        //save some data to firebase
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key, 
                ...expense
            }));
        });
    };
};

//REMOVE_EXPENSE - action generator function
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
  });
  
  export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch) => {
      return database.ref(`expenses/${id}`).remove().then(() => {
        dispatch(removeExpense({ id }));
      });
    };
  };

//EDIT_EXPENSE - action generator function
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
});

export const startEditExpense = (id, updates) => {
    return ((dispatch) => {
      return database.ref(`expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates));
      });
    });      
};

//SET_EXPENSES
 export const setExpenses = (expenses) => ({
     type: 'SET_EXPENSES',
     expenses
 });

 export const startSetExpenses = () => {

    return ((dispatch) => {
      return database.ref('expenses').once('value').then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapShot) => {
            //parsing the firebase data to an array
            expenses.push({
                id:childSnapShot.key,
                ...childSnapShot.val()
            });
        });

        dispatch(setExpenses(expenses));
      })
    })
 };

