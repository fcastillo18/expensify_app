import {createStore} from 'redux';

//Action genetators: functions that return action objects.
//default value for incrementBy and the another step y create empty object y first value doesnt exist
const incrementCount = ( {incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ( {decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy //name and value hace same name, I can put it just once
 })

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
}) 

const resetCount = ({ count } = {}) => ({
    type: 'RESET',
    count
})

//Reducers
/**
 * 1- Reducers are Pure Functions
 * 2- Never change state or action (must returning a new object)
 */
const countReducer = (state = { count:0 }, action)=>{
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    switch (action.type) {
        case 'INCREMENT':
          return {
             count: state.count + action.incrementBy
          };
        case 'DECREMENT':
          return {
             count: state.count - decrementBy
          };
        case 'RESET':
          return {
            count: 0
          };
        case 'SET':
          return {
            count: action.count
          };
        default: 
          return state; 
          }
        console.log('Running');
        return state;
    }

/*
    default state object
*/
const store = createStore(countReducer);

const unsuscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
// console.log(store.getState());

