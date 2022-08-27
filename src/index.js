import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

let rerenderTree = () => {
    ReactDOM.render(
        <App addPost={store.addPost.bind(store)} 
             state={store.getState()} 
             updateNewPostText={store.updateNewPostText.bind(store)} />,
      document.getElementById('root')
    );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);





