import {addPostActionCreator, deletePost, profile_reducer} from "./profile_reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";


test('new post should be added', () => {

    let action = addPostActionCreator("IT is cool")
    let state =  {
        posts: [
            {id: 1, message: 'Hi', likes: '3'},
            {id: 2, message: 'Hiiii', likes: '55455'},
            {id: 3, message: 'Cool', likes: '111'}
        ],
    }
    let newState = profile_reducer(state,action)
    expect(newState.posts.length).toBe(4)
});

test('new post should be correct', () => {

    let action = addPostActionCreator("IT is cool")
    let state =  {
        posts: [
            {id: 1, message: 'Hi', likes: '3'},
            {id: 2, message: 'Hiiii', likes: '55455'},
            {id: 3, message: 'Cool', likes: '111'}
        ],
    }
    let newState = profile_reducer(state,action)
    expect(newState.posts[3].message).toBe("IT is cool")
});

test('post should be deleted', () => {

    let action = deletePost(1)
    let state =  {
        posts: [
            {id: 1, message: 'Hi', likes: '3'},
            {id: 2, message: 'Hiiii', likes: '55455'},
            {id: 3, message: 'Cool', likes: '111'}
        ],
    }
    let newState = profile_reducer(state,action)
    expect(newState.posts.length).toBe(2)
});