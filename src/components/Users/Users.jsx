import React from 'react'
import styles from './users.module.css'
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
        if (i == 20) {
            break
        }
    }

    return <div className={styles.users}>
        <div>
            {pages.map(p => {
                return <span className={styles.span} onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? styles.selectedPage : styles.span}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div className={styles.div} key={u.id}>
                    <span className={styles.span}>
                        <span>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.img}/>
                            </NavLink>
                        </span>

                        <span className={styles.btn2}>
                            {u.followed ? <button className={styles.btn2} disabled={props.followInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollow(u.id)
                                                  }}>UnFollow</button>
                                : <button className={styles.btn2} disabled={props.followInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>}
                        </span>
                    </span>
                <span>

                            <div>Name: {u.name != null ? u.name : "user name"}</div>
                            <div>Status: {u.status != null ? u.status : "none"}</div>
                    </span>

            </div>)
        }

    </div>
}


export default Users