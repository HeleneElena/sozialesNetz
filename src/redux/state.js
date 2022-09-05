import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import dialogsReducer from './dialogs-reducer';

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
        sidebar: {}, 
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
};



export default store;
window.store = store; 
