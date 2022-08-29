import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Person from './Person/Person';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageCreator } from './../../redux/state';

const Dialogs = ({dialogs, messages, dispatch}) => {
    let dialogsElements = dialogs.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ); 
    let messagesElements = messages.messages.map( (m, id) => <Message key={id} message={m.message} /> );
    let personsElements = dialogs.dialogs.map( (d, id) =>  <Person key={id} name={d.name} /> );
    let newMessageBody = messages.newMessageBody;

let onSendMessageClick = () => {
    dispatch(sendMessageCreator());
};

let onNewMessageChange = (e) => {
    let body = e.target.value;
    dispatch(updateNewMessageCreator());
};

    return (<> 
        <div className={s.wrapper}>
                <div className={s.people}>
                    <h2 className={s.title}>DIALOGS </h2>
                    { dialogsElements }
                </div>
                <div> 
                <div className={s.communication}> 
                    { personsElements }
                </div>
                    <div>{ messagesElements }</div>
                    <div >
                        <div><textarea value={newMessageBody} 
                                        className={s.newDialog} 
                                        placeholder="dein Post..." 
                                        onChange={onNewMessageChange} /></div>
                        <div><button onClick={onSendMessageClick} className={s.btnDialog}>Send </button></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialogs;