import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getUserData} from "./auth_reducer";

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false,
}
export const app_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
    }
    return state
}
export const setInitialized = () => ({
    type: SET_INITIALIZED,
})

//thunk
export const getInitialized = () => (dispatch) => {
    let promise = dispatch(getUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })

}


export default app_reducer
