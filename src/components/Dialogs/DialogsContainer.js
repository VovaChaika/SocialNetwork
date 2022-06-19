import React from "react";
import {sendMessageCreator, updateMessageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) =>{
    return{
        state: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessageOnClick:(newMessageBody)=>{
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

