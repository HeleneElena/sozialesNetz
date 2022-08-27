import { rerenderTree } from "../render";

let state = {
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
    sidebar: {},
};

export const addPost = () => {
    let newPost = {
        id: 5, 
        message: state.profilePage.newPostText, 
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderTree(state);
};

export default state;
