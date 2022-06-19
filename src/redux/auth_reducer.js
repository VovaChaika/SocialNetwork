import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'

export let initialState = {
    id: 24302,
    email: null,
    login: null,
    isAuth: false
}
export const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
    }
    return state
}
export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})

//thunk
export const getUserData = () => (dispatch) => {
    return authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserData(id, email, login, true))
        }
    })
}
export const login = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        }
    )
}
export const logout = (email, password, rememberMe = false) => (dispatch) => {
    authAPI.logout().then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        }
    )
}


export default auth_reducer
