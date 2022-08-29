import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Person from './Person/Person';
import Message from './Message/Message';

const Dialogs = ({dialogs, messages}) => {
    let dialogsElements = dialogs.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> ); 
    let messagesElements = messages.messages.map( (m, id) => <Message key={id} message={m.message} /> );
    let personsElements = dialogs.dialogs.map( (d, id) =>  <Person key={id} name={d.name} /> );

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
                        { messagesElements }
                </div>
            </div>
            <div className={s.newDialog} > 
                <textarea placeholder="dein Post..." />
                <button className={s.button}>Send </button>
            </div>
        </>
    )
}

export default Dialogs;