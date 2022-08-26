import React from 'react';
import s from './Message.module.css';

const Message = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (
         <div className={s.window}>{props.message}</div>
    )
}

export default Message;

