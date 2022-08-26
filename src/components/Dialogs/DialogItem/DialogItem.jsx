import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/ + props.id';

    return (
            <div className={s.dialogItem}>
                <div className={s.circle}>
                    <div>
                        <NavLink to={path} className={s.vorname}>{props.name}</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default DialogItem;