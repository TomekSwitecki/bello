import React from 'react';
import Button, { ButtonType, ButtonColor } from '../Button/Button';
import digitalProccess from "../../../Resources/digital-proccess.png";

const VerticalCard = ({ title, imageSrc, description }) => {


    return (
        <div className="vertical-card">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            <Button
                type={ButtonType.Filled}
                color={ButtonColor.Primary}
                text="Learn more!"
            />
            <img className='vertical-card__ilustration' src={digitalProccess}></img>
        </div>
    );
};


export default VerticalCard;
