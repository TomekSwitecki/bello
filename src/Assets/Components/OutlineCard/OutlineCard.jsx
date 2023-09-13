
import React from 'react';



const OutlineCard = ({ title, imageSrc,backgroundImg, description, type, tag }) => {


    const cardClass = `outline-card outline-card--${type}`;


    return (
        <div className={cardClass}>
            <div className='outline-card__content'>
                {type != "outline" && tag}
                <div>
                    <h2 className="outline-card__title">{title}</h2>
                    {description && <p className="outline-card__description">{description}</p>}
                </div>
            </div>
            <img className='outline-card__ilustration' src={imageSrc}></img>
            <img className='outline-card__background' src={backgroundImg}></img>
        </div>
    );
};


export default OutlineCard;
