import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom"
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requieredField} from "../../utils/validators/validators";
const maxLengthCreator20 = maxLengthCreator(20)
const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map((elem) => <Dialog key={elem.id} id={elem.id} name={elem.name}/>)

    let messagesElements = props.state.messages
        .map((elem) => <Message key={elem.id} id={elem.id} text={elem.text}/>)

    let addNewMessage = (values) => {
        props.sendMessageOnClick(values.newMessageBody)
    }

    if (!props.isAuth) {
        return <Navigate to={"/login"}/>
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div>{dialogsElements}</div>
        </div>
        <div className={s.messages}>
            <div>{messagesElements}</div>

        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
}
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>

        <div>
            <Field component={Textarea} validate={[requieredField, maxLengthCreator20]} name={'newMessageBody'} placeholder={"Enter the message"}/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}
const AddMessageFormRedux = reduxForm({form:"DialogAddMessageForm"})(AddMessageForm)

export default Dialogs;