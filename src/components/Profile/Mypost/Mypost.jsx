import React from 'react';
import s from './Mypost.module.css';
import Post from './Post/Post';

const Mypost = ({posts, addPost}) => {

    let newPostElement = React.createRef();

    let addPosts = () => {
        let text = newPostElement.current.value;
        addPost(text);
    };

    return (
        <div>
            <div className={s.message}>My posts
                <div> 
                    <textarea ref={newPostElement} className={s.newpost}>your news...</textarea>
                      <button onClick={addPosts} className={s.button}>Send</button>
                  </div>
                <Post message={posts.message} likesCount={posts.likesCount} />
                <Post message={posts.message} likesCount={posts.likesCount} />
                <Post  message={posts.message} likesCount={posts.likesCount} />
                </div>   
        </div>
    )
}

export default Mypost;