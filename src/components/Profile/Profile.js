import React from "react";
import s from './Profile.module.css'
import '../common/Content.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {
    return <div className={"content"}>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer setLike={props.setLike}/>
    </div>
}

export default Profile;