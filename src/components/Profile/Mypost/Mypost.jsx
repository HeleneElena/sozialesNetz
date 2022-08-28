import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = ({posts, dispatch}) => {
    let postsElements = posts.posts.map( el => <Post key={el.id} message={el.message} likesCount={el.likesCount} /> ); 


    let newPostElement = React.createRef();

    let addPosts = () => {
       dispatch({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
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