import React from 'react';
import Logotype from "../../../Resources/Bello/BelloLogotype.png"

export const Logo = () => {
    return (
        <div className='logo__container'>
            <img className='logo' src={Logotype}></img>
        </div>
    );
}