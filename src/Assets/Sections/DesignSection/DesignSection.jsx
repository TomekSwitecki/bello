import React from 'react';
import { Section } from "../../Components/Section/Section";
import { title, sectionSubtitle, Card1_Title, Card1_Description, Card2_Title, Card2_Description, Card3_Title, Card3_Description, Card4_Title, Card4_Description } from "./const";
import VerticalCard, { CardColor } from '../../Components/VerticalCard/VerticalCard';
import digitalProccess from "../../../Resources/UIUXilustrations/digitalProccess.png";
import workflow from "../../../Resources/UIUXilustrations/workflow.png";
import debugging from "../../../Resources/UIUXilustrations/debugging.png";
import design from "../../../Resources/UIUXilustrations/design.png";
import PlainCard from '../../Components/PlainCard/PlainCard';
export function DesignSection() {

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={sectionSubtitle} id="design_section" dir="column" headingDir="row" justifyContent="center" >
                <div className='card-wrapper'>
                    <PlainCard type="plain" title={Card1_Title} description={Card1_Description} imageSrc={workflow} ></PlainCard>
                    <PlainCard type="plain" title={Card2_Title} description={Card2_Description} imageSrc={debugging} ></PlainCard>
                    <PlainCard type="plain" title={Card3_Title} description={Card3_Description} imageSrc={design} ></PlainCard>
                    <PlainCard type="plain" title={Card4_Title} description={Card4_Description} imageSrc={digitalProccess} ></PlainCard>
                </div>
            </Section>
        </React.Fragment>
    )
}