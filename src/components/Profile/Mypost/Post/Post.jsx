import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.circle}></div>
            <div className={s.post}>
                <p className={s.text}> { props.message } </p> 
                <button className={s.likes}> like: { props.likesCount } </button>
            </div>  
        </div>
    )
}

export default Post;