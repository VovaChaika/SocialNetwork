import React from 'react';
import s from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={s.footer}>
            Other my projects:
            <span><a href="https://vovachaika.github.io/chess-game" target="_blank">React Chess</a></span><div></div>
            <span><a href="https://currency-converter-two-dun.vercel.app/" target="_blank">Currency Converter</a></span>
        </div>
    );
};

export default Footer;