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
            {id: 5, message: 'Hello, zusammen'}        
        ], 
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
        if(action.type === 'ADD-POST') {
            this._addPost();
        } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText);
        }
    },
};
export default store;
window.store = store; 
