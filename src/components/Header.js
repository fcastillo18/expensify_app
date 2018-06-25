import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux' 
import { startLogout } from '../actions/auth';
//exact={true}
export const Header = ({ startLogout }) =>(
    <header className="header">
    <div className="content-container">
        <div className="header__content">
            <Link className="header__title" to='/dashboard'>
                <h1>Expensify</h1>
            </Link> 
            {//<NavLink to='/edit' activeClassName="is-active">Edit Expense</NavLink>
            }
            <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
    </div>
        
    </header>
)

const mapDispatchToPros = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToPros)(Header);