import React, {useEffect, useState} from "react";
import s from './Post.module.css'
import 'boxicons'
import userPhoto from "../../../../assets/images/user.png";


const Post = (props) => {
    const [disabledButton, setDisabledButton] = useState(false);

    return <div className={s.content}>
        <div>
            <img className={s.img} src={userPhoto} alt=""/>
            {props.message}
            <div><span className={s.span}>likes: {props.likes}</span>
                    <button onClick={() => {
                        props.setLike(props.id)
                    }} disabled={props.isLiked == 2}><box-icon name='like' animation='tada' /></button>
                    <button onClick={() => {
                        props.removeLike(props.id)
                    }} disabled={props.isLiked == 1}><box-icon name='dislike' animation='tada' ></box-icon></button>
            </div>

        </div>
    </div>
}

export default Post;