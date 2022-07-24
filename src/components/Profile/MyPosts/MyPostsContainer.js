import React from "react";
import {
    addPostActionCreator,
    newTextOnChangeActionCreator,
    setLike,
    removeLike,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";
import {connect} from "react-redux";
import {sendMessageCreator, updateMessageBodyCreator} from "../../../redux/dialogs_reducer";




/*const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store)=>{
                    let addPostOnChange = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    let updateTextOnChange = (text)=>{
                        store.dispatch(newTextOnChangeActionCreator(text))
                    }
                    return <MyPosts addPostOnChange={addPostOnChange} updateTextOnChange={updateTextOnChange} state={store.getState().profilePage}/>
                }

            }
        </StoreContext.Consumer>
        )
}

export default MyPostsContainer;*/


let mapStateToProps = (state) =>{
    return{
        state: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostOnChange: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        },
        setLike: (postId) => {
            dispatch(setLike(postId))
        },
        removeLike: (postId) => {
            dispatch(removeLike(postId))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;