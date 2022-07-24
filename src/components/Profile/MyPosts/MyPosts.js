import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requieredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
const maxLengthCreator30 = maxLengthCreator(30)
const MyPosts = (props) => {

    let postElements = props.state.posts
        .map((elem) => <Post key={elem.id} id={elem.id} message={elem.message} likes={elem.likes} isLiked={elem.isLiked} setLike={props.setLike} removeLike={props.removeLike}/>)
    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPostOnChange(values.newPostText)
    }

    const AddNewPostForm=(props)=>{
        return(
            <>
                <form onSubmit={props.handleSubmit}>
                    <div className={s.item}>
                        New post
                    </div>
                    <Field name={"newPostText"} component={Textarea} validate={[requieredField, maxLengthCreator30]}/>
                    <button>Add post</button>
                    <button>Remove</button>
                </form>
                {postElements}
            </>

        )
    }
    const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm)
    return <div>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
    </div>
}



export default MyPosts;