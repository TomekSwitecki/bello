import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title, subtitle, Card1_Title, Card1_Description } from "./const";
import VerticalCard from '../../Components/VerticalCard/VerticalCard';

export function WhatDoWeDo() {

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={subtitle} id="about_us" dir="column" headingDir="row" >
                <div className='cards_container'>
                    <VerticalCard title={Card1_Title} description={Card1_Description}></VerticalCard>
                    <VerticalCard title={Card1_Title} description={Card1_Description}></VerticalCard>
                    <VerticalCard title={Card1_Title} description={Card1_Description}></VerticalCard>
                </div>
            </Section>
        </React.Fragment>
    );
}
