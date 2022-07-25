import React, {useEffect, useState} from "react";
import s from './Post.module.css'
import 'boxicons'


const Post = (props) => {
    const [disabledButton, setDisabledButton] = useState(false);

    const dislikeImg = 'data:image/png;base64,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'
    const likeImg = 'data:image/png;base64,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'
    return <div className={s.content}>
        <div>
            <img className={s.img} src="https://html5css.ru/howto/img_avatar.png" alt=""/>
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