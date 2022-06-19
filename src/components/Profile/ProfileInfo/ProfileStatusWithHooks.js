import s from "./ProfileInfo.module.css";
import React, {useEffect, useState} from "react";
import Preloader from "../../common/preloader/Preloader";

const ProfileStatusWithHooks = (props)=> {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = ()=>{
        setEditMode(true)
    }
    const deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e)=>{
        setStatus(e.currentTarget.value)
    }
    return  <div>
            {!editMode &&
                <div className={s.item}>
                    <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status}/>
                </div>
            }
        </div>
    }


export default ProfileStatusWithHooks;