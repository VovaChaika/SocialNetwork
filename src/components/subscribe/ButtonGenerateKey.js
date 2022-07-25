import React, {useReducer} from "react";
import {encrypt, decrypt} from "./vigenere";
import {initialState} from "../../redux/auth_reducer";
import Timer from "./timer";
import {render} from "react-dom";

const GenerateKey = (props) => {
    let userId = initialState.id
    let plaintext = "ThisIsAStrokeForAKey";
    let key = toString(userId);
    let encrypted = encrypt(plaintext, key);
    let monthCount = 6;
    let createKey = () =>{
        alert("Your key - " + encrypted)
    }
    let checkKey = (value) =>{
        let decrypted = decrypt(value, key);
        if(decrypted==plaintext){
            monthCount++;
            alert("Your subscribe successfully passed!")
        }
        else {alert("wrong key")}
    }
    return <div>
        <div id="timer"></div>
        Subscribe valid till 30.{monthCount}.2022
        <Timer isSubscribe={props.isSubscribe} monthCount={monthCount}/>
        <button onClick={createKey}>Generate key</button>
        Enter Here:
        <textarea id="textArea" cols="50" rows="10"></textarea>
        <input onClick={()=>{document.getElementById('but').addEventListener('click',
            checkKey(document.getElementById('textArea').value),false)}} id="but" type="button" value="Submit Key"/>
    </div>
}

export default GenerateKey;