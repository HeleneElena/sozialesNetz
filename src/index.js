import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

let rerenderTree = () => {
    ReactDOM.render(
        <App dispatch={store.dispatch.bind(store)} 
             state={store.getState()}
             store={store} />,
      document.getElementById('root')
    );
};

rerenderTree(store.getState());
store.subscribe(rerenderTree);





