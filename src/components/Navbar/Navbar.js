import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {FaUserAlt, FaUsers} from "react-icons/fa"
import {BiMessageSquare} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"
const Navbar = () => {
    return <div className={s.nav} >
        <ul>
            <li className={s.item}>
                <NavLink to={'/profile'} className = { navData => navData.isActive ? s.active : s.item }><FaUserAlt className={s.icon}/> Profile</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to={'/dialogs'} className = { navData => navData.isActive ? s.active : s.item }><BiMessageSquare className={s.icon}/> Messages</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to={'/users'} className = { navData => navData.isActive ? s.active : s.item }><FaUsers className={s.icon}/> Users</NavLink>
            </li>
            <li className={s.item}>
                <NavLink to={'/settings'} className = { navData => navData.isActive ? s.active : s.item }><FiSettings className={s.icon}/> Settings</NavLink>
            </li>
        </ul>
        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/profile'} className = { navData => navData.isActive ? s.active : s.item }><FaUserAlt className={s.icon}/> Profile</NavLink>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/dialogs'} className = { navData => navData.isActive ? s.active : s.item }><BiMessageSquare className={s.icon}/> Messages</NavLink>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/users'} className = { navData => navData.isActive ? s.active : s.item }><FaUsers className={s.icon}/> Users</NavLink>*/}
        {/*</div>*/}
        {/*<div className={s.item}>*/}
        {/*    <NavLink to={'/settings'} className = { navData => navData.isActive ? s.active : s.item }><FiSettings className={s.icon}/> Settings</NavLink>*/}
        {/*</div>*/}
    </div>
}

export default Navbar;