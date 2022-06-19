import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className={s.nav} >
        <div className={s.item}>
            <NavLink to={'/profile'} className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/dialogs'} className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/users'} className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/login'} className = { navData => navData.isActive ? s.active : s.item }>Login</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to={'/3'} className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
        </div>
    </div>
}

export default Navbar;