import React from 'react'
import './signIn.css'
import {MdOutlineHealthAndSafety} from "react-icons/md"
import { IconContext } from 'react-icons/lib/cjs';

function signIn() {
    return (
        <>
        <IconContext.Provider value={{color: 'navy', size: 44}}>
    <div className="body">
        <div class="user">
    <header class="user__header">

        <MdOutlineHealthAndSafety className='icon'></MdOutlineHealthAndSafety>
    </header>
    
    <form class="form">
        <div class="form__group">
            <input type="text" placeholder="Username" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="email" placeholder="Email" class="form__input" />
        </div>
        
        <div class="form__group">
            <input type="password" placeholder="Password" class="form__input" />
        </div>
        
        <button class="btn-sec" type="button">Register</button>
    </form>
</div>
</div>
</IconContext.Provider>
    </>

    );
}

export default signIn;
