import React from 'react';
import ReactDOM from 'react-dom';
import { addPost } from './redux/state';

import './index.css';
import App from './App';

export let rerenderTree = (state) => {
    ReactDOM.render(

        <App addPost={addPost} state={state} />,
      document.getElementById('root')
    );
}
