import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title, subtitle } from "./const";

export function WhatDoWeDo() {

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={subtitle} id="about_us" dir="column" headingDir="row" ><img src="https://picsum.photos/200/300" ></img></Section>
        </React.Fragment>
    );
}
