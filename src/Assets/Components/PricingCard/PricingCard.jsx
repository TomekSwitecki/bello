
import React from 'react';



const PricingCard = ({ id, tag, title, description, price, labels, button, backgroundImg }) => {


    return (
        <div id={id} className={"pricing-card"}>
            {tag}
            <div className='pricing-card__content'>
                <div className='pricing-card__header'>
                    <h2 className="pricing-card__title">{title}</h2>
                </div>
                <p className="pricing-card__description">{description}</p>
                <div className="pricing-card__price">
                    {price}
                </div>
            </div>
            <div className='pricing-card__labels'>
                {labels}
            </div>
            <img className='pricing-card__background' src={backgroundImg}></img>
            {button}

        </div>
    );
};


export default PricingCard;
