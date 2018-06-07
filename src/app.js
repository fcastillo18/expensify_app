import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
// import { addExpense } from './actions/expenses';
// import { setTextFilter } from './actions/filters'
// import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './style/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense( {description: 'Water bill', amount:4500}));
// store.dispatch(addExpense( {description: 'Gas bill',  createdAt:1000}));
// store.dispatch(addExpense( {description: 'Rent', amount:12500}));
// store.dispatch(setTextFilter('water')); 

// setTimeout( () => {
    // store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(VisibleExpenses);

// console.log(store.getState());
const jsx = ( 
    //Redux
    //Router
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
