import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <div>
            <img className={s.img} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
            {props.message}
            <div><span>likes: {props.likes}</span></div>
        </div>
    </div>
}

export default Post;