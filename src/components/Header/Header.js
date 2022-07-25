import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {FaReact} from "react-icons/fa"

const Header = (props) => {
  return <header className={s.header}>
      <span className={s.logo}><FaReact className={s.logo}/></span>
      <div className={s.loginBlock}>
          {props.isAuth
              ? <div>{props.login} - <button onClick={props.logout}><box-icon type='solid' name='user-check'></box-icon>Log out</button></div>
              : <NavLink to={'/Login'}><box-icon type='solid' name='user-x'></box-icon>Login</NavLink>}

      </div>
  </header>
}

export default Header;