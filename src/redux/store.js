import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {sidebar_reducer} from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi', likes: '3'},
                {id: '2', message: 'Hiiii', likes: '55455'},
                {id: '3', message: 'Cool', likes: '111'}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Pasha'},
                {id: 3, name: 'Kolya'},
            ],
            messages: [
                {id: 1, text: 'hi'},
                {id: 2, text: 'how a u'},
                {id: 3, text: 'cool thx'},
            ],
            newMessageBody: ""
        },
        sidebar:{}

    },
    getState() {
        return this._state;
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer

    },

    dispatch(action) {
        this._state.profilePage=profile_reducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogs_reducer(this._state.dialogsPage, action)
        this._state.sidebar=sidebar_reducer(this._state.sidebar, action)
        this._callSubscriber()
    }

}




export default store;

