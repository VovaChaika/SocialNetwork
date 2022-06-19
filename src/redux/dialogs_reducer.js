
const SEND_MESSAGE = 'SEND_MESSAGE'
let initialState = {
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
    }
export const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let last = state.messages[state.messages.length-1].id+1
            return {...state, messages: [...state.messages, {id: last, text: action.newMessageBody}]}
    }
    return state;
}
export const sendMessageCreator = (newMessageBody) => {
    return {type: SEND_MESSAGE, newMessageBody}
}
