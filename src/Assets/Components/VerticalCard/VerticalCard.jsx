import React from 'react';
import Button, { ButtonType, ButtonColor } from '../Button/Button';


export const CardColor = {
    Blue: "blue",
    Red: "red",
    Yellow: "yellow",
};

const VerticalCard = ({ title, imageSrc, description, color }) => {


    const cardClass = `vertical-card vertical-card--${color}`;


    return (
        <div className={cardClass}>
            <h2 className="vertical-card__title">{title}</h2>
            <p className="vertical-card__description">{description}</p>
            <Button
                type={ButtonType.Filled}
                color={ButtonColor.Primary}
                text="Learn more!"
            />
            <img className='vertical-card__ilustration' src={imageSrc}></img>
        </div>
    );
};


export default VerticalCard;
