import React from 'react';
import s from './Person.module.css';

const Person = (props) => {
    return (
        <div className={s.circle1}>
            <p className={s.signature}>{props.name}</p>  
        </div>
    )
}

export default Person;