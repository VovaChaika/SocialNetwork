import React from "react";
import s from './Footer.module.css'
import {NavLink} from "react-router-dom";
import GenerateKey from "./ButtonGenerateKey";

const Footer = (props) => {
    let isSubscribeGone = false
    if (isSubscribeGone){alert("!!!!!")}
    return <div className={s.header}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <GenerateKey isSubscribe={isSubscribeGone}/>
    </div>
}

export default Footer;