import React from 'react';
import ReactDOM from 'react-dom';
import { addPost, updateNewPostText } from './redux/state';

import './index.css';
import App from './App';

export let rerenderTree = (state) => {
    ReactDOM.render(

        <App addPost={addPost} state={state} updateNewPostText={updateNewPostText} />,
      document.getElementById('root')
    );
}
