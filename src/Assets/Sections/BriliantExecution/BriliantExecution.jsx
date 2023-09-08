import React from 'react';
import { Section } from "../../Components/Section/Section";
import { title, sectionSubtitle, Card1_Title, Card1_Description, Card2_Title, Card2_Description, Card3_Title, Card3_Description, Card4_Title, Card4_Description } from "./const";
import VerticalCard, { CardColor } from '../../Components/VerticalCard/VerticalCard';
import digitalProccess from "../../../Resources/UIUXilustrations/digitalProccess.png";
import workflow from "../../../Resources/UIUXilustrations/workflow.png";
import debugging from "../../../Resources/UIUXilustrations/debugging.png";
import design from "../../../Resources/UIUXilustrations/design.png";
import PlainCard from '../../Components/PlainCard/PlainCard';
import Crane from "../../../Resources/Construction/Crane.png";
import Crane2 from "../../../Resources/Construction/Crane2.png";
import Crane3 from "../../../Resources/Construction/Crane3.png";
import Worker from "../../../Resources/Construction/Worker.png";
import Nails from "../../../Resources/Construction/Nails.png"
export function BriliantExcecution() {

    return (
        <React.Fragment>
            <div className='construction_ilustration'>
                <img className="crane crane_1" src={Crane}></img>
                <img className="crane crane_2" src={Crane2}></img>
                <img className="crane crane_background" src={Crane2}></img>
                <img className="crane crane_3" src={Crane3}></img>
                <img className="worker worker_1" src={Worker}></img>
                <img className="worker worker_2" src={Worker}></img>
                <img className="worker worker_3" src={Worker}></img>
                <img className="nails" src={Nails}></img>
            </div>

            <Section sectionTitle={title} sectionSubtitle={sectionSubtitle} id="design_section" dir="column" headingDir="row" justifyContent="center" >
            </Section>
        </React.Fragment>
    )
}