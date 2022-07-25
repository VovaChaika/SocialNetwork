import React from "react";
import s from './Subscribe.module.css'
import {NavLink} from "react-router-dom";
import GenerateKey from "./ButtonGenerateKey";

const Subscribe = (props) => {
    let isSubscribeGone = false
    if (isSubscribeGone){alert("!!!!!")}
    return <div className={s.footer}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt=""/>
        <GenerateKey isSubscribe={isSubscribeGone}/>
    </div>
}

export default Subscribe;