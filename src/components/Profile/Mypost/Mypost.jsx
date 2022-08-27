import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = ({posts, addPost, updateNewPostText}) => {
    let postsElements = posts.posts.map( el => <Post key={el.id} message={el.message} likesCount={el.likesCount} /> ); 


    let newPostElement = React.createRef();

    let addPosts = () => {
        addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        updateNewPostText(text);
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