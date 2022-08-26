import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <div className={s.header}>
        <div className={s.logo}>
            <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="38.5217" cy="38.521" r="38.1279" transform="rotate(-0.594928 38.5217 38.521)" fill="#FFC619"/>
                <ellipse cx="34.5331" cy="11.5628" rx="4.74023" ry="4.53413" transform="rotate(-0.594928 34.5331 11.5628)" fill="#6045E2"/>
                <ellipse cx="20.7823" cy="17.6812" rx="4.53413" ry="4.74023" transform="rotate(-0.594928 20.7823 17.6812)" fill="white"/>
                <circle cx="14.3271" cy="30.7329" r="4.53413" transform="rotate(-0.594928 14.3271 30.7329)" fill="#FF769A"/>
                <circle cx="14.4911" cy="46.8091" r="4.53413" transform="rotate(-0.594928 14.4911 46.8091)" fill="#6045E2"/>
                <circle cx="23.6982" cy="59.9048" r="4.53413" transform="rotate(-0.594928 23.6982 59.9048)" fill="white"/>
                <circle cx="38.7814" cy="63.6634" r="4.74023" transform="rotate(-0.594928 38.7814 63.6634)" fill="#FF769A"/>
            </svg>
        </div>

                 
        </div>
    )
}

export default Header;