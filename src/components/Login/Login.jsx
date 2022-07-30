import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requieredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import {Navigate, Redirect} from "react-router-dom";
import style from"../common/FormsControls/FormsControls.module.css"
import s from "./Login.module.css"

const maxLengthCreator50 = maxLengthCreator(50)

let LoginForm = (props) => {
    function onChange(value) {
        console.log("Captcha value", value)
    }

    return <form onSubmit={props.handleSubmit} action="" className={s.login}>
        <div color={"red"}>*Email: free@samuraijs.com Password: free – to login</div>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input} validate={[requieredField, maxLengthCreator50]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input} validate={[requieredField, maxLengthCreator50]}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"}  component={Input} /> remember me
        </div>
        {props.captchaUrl&&<img src={props.captchaUrl}/>}
        {props.captchaUrl&&<div>
            <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[requieredField, maxLengthCreator50]}/>
        </div>}
        {props.error&&<div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}
let LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

let Login = (props) => {
    const onSubmit = (formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps=(state)=>({
    captchaUrl:state.auth.captchaUrl,
    isAuth:state.auth.isAuth
})

export default connect (mapStateToProps,{login})(Login)