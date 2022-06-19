import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {profile_reducer} from "./profile_reducer";
import {dialogs_reducer} from "./dialogs_reducer";
import {sidebar_reducer} from "./sidebar_reducer";
import {users_reducer} from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form";
import app_reducer from "./app_reducer";

let reducers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    sidebar: sidebar_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
    form:formReducer,
    app:app_reducer,
})
let store = createStore(reducers ,applyMiddleware(thunkMiddleware))
window.store = store;
export default store