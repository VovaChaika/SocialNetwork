import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_LIKE = 'SET_LIKE'
const REMOVE_LIKE = 'REMOVE_LIKE'
let initialState =  {
        posts: [
            {id: 1, message: 'Hi', likes: 3, isLiked:0},
            {id: 2, message: 'Hiiii', likes: 55, isLiked:0},
            {id: 3, message: 'Cool', likes: 111, isLiked:0}
        ],
        profile: null,
        status: "",
    }
export const profile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let last = state.posts[state.posts.length-1].id+1
            return {...state, posts: [...state.posts, {id: last, message: action.newPostText, likes: 0, isLiked: 0}]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status:action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p=>p.id!=action.postId)}
        case SET_LIKE:
            state.posts[action.postId-1].likes+=1
            state.posts[action.postId-1].isLiked=2
            return {...state}
        case REMOVE_LIKE:
            state.posts[action.postId-1].likes-=1
            state.posts[action.postId-1].isLiked=1
            return {...state}
    }
    return state
}
export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST, newPostText
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const setStatus = (status) => ({
    type: SET_STATUS, status
})
export const deletePost = (postId) => ({
    type: DELETE_POST, postId
})
export const setLike = (postId) => { return {type: SET_LIKE, postId}}
export const removeLike = (postId) => { return {type: REMOVE_LIKE, postId}}




//thunk
export const getUserProfile = (profileId) => (dispatch) => {
    profileAPI.getProfile(profileId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatus = (profileId) => (dispatch) => {
    profileAPI.getStatus(profileId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}