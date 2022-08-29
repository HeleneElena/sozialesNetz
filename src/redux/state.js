const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
      SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, why nobody love me?', likesCount: 12},
                {id: 2, message: 'What is happening in the world today?', likesCount: 85},
                {id: 3, message: 'I study English every day', likesCount: 69},
            ],
        dialogs: [
                {id: 1, name: 'Artur'},
                {id: 2, name: 'Michi'},
                {id: 3, name: 'Miroslav'},
                {id: 4, name: 'Helene'},
                {id: 5, name: 'Boss'}
        ],
        newPostText: '',
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Yo, frends!)))'},
            {id: 2, message: 'Hi, Artur! Wie geht es dir?'},
            {id: 3, message: 'Hello, my friend!!!'},
            {id: 4, message: 'Hi!'},
            {id: 5, message: 'Hello, zusammen'},        
        ], 
        newMessageBody: ''
    },
    sidebar: {}, },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _addPost() {
        let newPost = {
                id: 5, 
                message: this._state.profilePage.newPostText, 
                likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
       this._state.profilePage.newPostText = newText;
       this._callSubscriber(this._state);
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            this._addPost();
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 6, message: body} );
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({ type: ADD_POST});
export const updateNewPostActionCreator = (text) =>
             ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const updateNewMessageCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});
export const sendMessageCreator = () => ({ type: SEND_MESSAGE});


export default store;
window.store = store; 
