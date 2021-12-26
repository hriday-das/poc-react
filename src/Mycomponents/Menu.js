import React from 'react'
import { NavLink } from 'react-router-dom';
export const Menu = () => {
    return (
        <div>
            <>
                <NavLink activeClassName="active_class" to="/registration"> Sign Up</NavLink>
                <NavLink activeClassName="active_class" to="/login"> Login</NavLink>
            </>
        </div>
    )
}
