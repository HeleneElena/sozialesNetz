import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.nav}> 
                <NavLink to='/profile' className = {s.link}> Profile</NavLink>
            </div>
            <div className={s.nav}> 
                <NavLink to='/dialogs' className={s.link}> Messages</NavLink>           
            </div>
            <div className={s.nav}> 
                <NavLink to='/' className={s.link}> News</NavLink>
            </div>
            <div className={s.nav}> 
                <NavLink to='/' className={s.link}> Music</NavLink>
            </div>
            <div className={s.nav}> 
                <NavLink to='/' className={s.link}> Settings</NavLink>
            </div>
        </div>
    )
}

export default Navbar;