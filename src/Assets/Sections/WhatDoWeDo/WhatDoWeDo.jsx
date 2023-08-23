import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title, subtitle, Card1_Title, Card1_Description, Card2_Title, Card3_Title } from "./const";
import VerticalCard, { CardColor } from '../../Components/VerticalCard/VerticalCard';
import digitalProccess from "../../../Resources/UIUXilustrations/digitalProccess.png";
import newFunctions from "../../../Resources/UIUXilustrations/newFunctions.png";
import debugging from "../../../Resources/UIUXilustrations/debugging.png";
import IconAvatar, { AvatarColor } from '../../Components/IconAvatar/IconAvatar';
import { Anchor, PencilPaper, CodingWebsite } from "@vectopus/atlas-icons-react";
export function WhatDoWeDo() {

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={subtitle} id="about_us" dir="column" headingDir="row" >
                <div className='cards_container'>
                    <VerticalCard iconAvatar={<IconAvatar color={AvatarColor.Yellow} icon={<PencilPaper />} />} color={CardColor.Blue} title={Card1_Title} description={Card1_Description} imageSrc={digitalProccess}></VerticalCard>
                    <VerticalCard iconAvatar={<IconAvatar color={AvatarColor.Blue} icon={<Anchor />} />} color={CardColor.Red} title={Card2_Title} description={Card1_Description} imageSrc={newFunctions}></VerticalCard>
                    <VerticalCard iconAvatar={<IconAvatar color={AvatarColor.Purple} icon={<CodingWebsite />} />} color={CardColor.Yellow} title={Card3_Title} description={Card1_Description} imageSrc={debugging}></VerticalCard>
                </div>
            </Section>
        </React.Fragment>
    );
}
