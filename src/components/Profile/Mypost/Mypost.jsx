import React from 'react';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostActionCreator } from './../../../redux/state';

import s from './Mypost.module.css';

const Mypost = ({posts, dispatch}) => {
    let postsElements = posts.posts.map( el => <Post key={el.id} message={el.message} likesCount={el.likesCount} /> ); 

    let newPostElement = React.createRef();

    let addPosts = () => {
       dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        dispatch(action);
    };

    return (
        <div>
            <div className={s.message}>My posts
                <div> 
                    <textarea ref={newPostElement} className={s.newpost} 
                              value={posts.newPostText}
                              onChange={onPostChange}
                              placeholder="deine Nachrichten..." />
                      <button onClick={addPosts} className={s.button}>Send </button>
                  </div>
                {postsElements}
                </div>   
        </div>
    )
}

export default Mypost;