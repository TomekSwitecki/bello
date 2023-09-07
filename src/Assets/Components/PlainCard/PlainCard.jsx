
import React from 'react';



const PlainCard = ({ title, imageSrc, description, type, iconAvatar, tag }) => {


    const cardClass = `plain-card plain-card--${type}`;


    return (
        <div className={cardClass}>
            {iconAvatar}
            <div className='plain-card__content'>
                {type != "plain" && tag}
                <div>
                    <h2 className="plain-card__title">{title}</h2>
                    <p className="plain-card__description">{description}</p>
                </div>
            </div>
            <img className='plain-card__ilustration' src={imageSrc}></img>
        </div>
    );
};


export default PlainCard;
