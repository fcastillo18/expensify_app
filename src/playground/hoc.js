// High Order Component (HOC) - A component (HCO) that renders another component.
// Reuse code
// Render jicacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info...</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

//Required authentication
const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuthenticated ? (                
                <WrappedComponent {...props} /> 
            ) : (<p>You are not authenticated!</p>)
            }
        </div>
    );
};

//HOC
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info= 'There are the details'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info= 'There are the details'/>, document.getElementById('app'))
