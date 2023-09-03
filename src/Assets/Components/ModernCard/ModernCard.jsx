
import React from 'react';



const ModernCard = ({ id, title, description, icon, type, backgroundImg }) => {


    const cardClass = `modern-card modern-card--${type}`;


    return (
        <div id={id} className={cardClass}>
            <div className='modern-card__content'>
                <div className='modern-card__header'>
                    <div className="modern-card__icon">{icon}</div>
                    <h2 className="modern-card__title">{title}</h2>
                </div>
                <p className="modern-card__description">{description}</p>
            </div>
            <img className='modern-card__background' src={backgroundImg}></img>
        </div>
    );
};


export default ModernCard;
