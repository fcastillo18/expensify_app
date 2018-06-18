import uuid from 'uuid';

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
export const addExpense = (
    {
        description = '', 
        note='', 
        amount=0, 
        createdAt=0
    } = {}
    ) =>({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
    }
})

//REMOVE_EXPENSE - action generator function
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE - action generator function
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
});