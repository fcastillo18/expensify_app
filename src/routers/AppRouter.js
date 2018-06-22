import React from 'react';
import {BrowserRouter, Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

/**
 * By default when we use BrowserRouter, React do some work behind the scenes. 
 * Create an instance of BrowserRouterHistory and is registering with our new Router,
 * But we can do Manually to be able to use History anywhere we want and not just in the context
 * of BrowserRouter.
 */

export const history = createHistory();

const AppRouter = () =>(
    //Look one by one Route until find a match if there is no match => 
    //NoFoundPage 404 which will be always a match
    // <BrowserRouter>
    <Router history={history}>
        <div>
            <Switch> 
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <PrivateRoute path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;
