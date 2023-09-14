import React, { useState, useEffect } from 'react';
import Tag from '../../Components/Tag/Tag';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title, subtitle, Card1_Title, Card1_Price, Card1_Description, Card1_Label_1, Card1_Label_2, Card1_Label_3, Card1_Tag, Card1_Button, Card2_Tag, Card2_Title, Card2_Description, Card2_Price, Card2_Label_1, Card2_Label_2, Card2_Label_3, Card2_Button } from "./const";
import PricingCard from '../../Components/PricingCard/PricingCard';
import Button, { ButtonType, ButtonColor } from "../../Components/Button/Button";
import { Label } from "../../Components/Label/Label";
import quotation from "../../../Resources/Afterclap/quotation.png";
import greetings from "../../../Resources/Afterclap/greetings.png";
export function PricingSection() {

    const lables1 = <React.Fragment>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_1}></Label>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_2}></Label>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_3}></Label>
    </React.Fragment>

    const lables2 = <React.Fragment>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_1}></Label>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_2}></Label>
        <Label prepend={<box-icon name='check-circle' type='solid' flip='horizontal' animation='tada' ></box-icon>} text={Card1_Label_3}></Label>
    </React.Fragment>

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={subtitle} id="pricing" dir="column" headingDir="column" justifyContent="center" headingCentered>
                <div className='cards__container'>
                    <PricingCard tag={<Tag color="blue" text={Card1_Tag} glow></Tag>} title={Card1_Title} description={Card1_Description} price={Card1_Price} button={<Button
                        type={ButtonType.Filled}
                        color={ButtonColor.Primary}
                        text={Card1_Button}
                    />}
                        labels={lables1}
                        backgroundImg={greetings}
                    />
                    <PricingCard tag={<Tag color="red" text={Card2_Tag} glow></Tag>} title={Card2_Title} description={Card2_Description} price={Card2_Price} button={<Button
                        type={ButtonType.Outlined}
                        color={ButtonColor.Black}
                        text={Card2_Button}
                    />}
                        labels={lables1}
                        backgroundImg={quotation}
                    />

                </div>
            </Section>
        </React.Fragment>
    );
}
