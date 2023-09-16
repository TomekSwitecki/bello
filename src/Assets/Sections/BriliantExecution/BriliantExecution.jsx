import React from 'react';
import { Section } from "../../Components/Section/Section";
import { title, sectionSubtitle, Card1_Title, Card1_Description, Card2_Title, Card2_Description, Card3_Title, Card3_Description, Card4_Title, Card4_Description } from "./const";
import Crane from "../../../Resources/Construction/Crane.png";
import Crane2 from "../../../Resources/Construction/Crane2.png";
import Crane3 from "../../../Resources/Construction/Crane3.png";
import Worker from "../../../Resources/Construction/Worker.png";
import Nails from "../../../Resources/Construction/Nails.png";
import Helmet from "../../../Resources/Construction/Helmet.png";
import Screwdriver from "../../../Resources/Construction/Screwdriver.png";
import Wrench from "../../../Resources/Construction/Wrench.png";
import Tape from "../../../Resources/Construction/Tape.png";
import Cone from "../../../Resources/Construction/Cone.png"
import Hammer from "../../../Resources/Construction/Hammer.png"
import Tag from '../../Components/Tag/Tag';
import OutlineCard from '../../Components/OutlineCard/OutlineCard';
import execution1 from "../../../Resources/Execution/execution_1.png";
import execution2 from "../../../Resources/Execution/execution_2.png";
import execution3 from "../../../Resources/Execution/execution_3.png";
import circles from "../../../Resources/Bloom/circles.png";
import hollowCube from "../../../Resources/Bloom/hollow-cube.png";
import cross from "../../../Resources/Bloom/cross.png";
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
                <div className='construction_ilustration--foreground'>
                    <img className="hammer" src={Hammer}></img>
                    <img className="cone" src={Cone}></img>
                    <img className="tape" src={Tape}></img>
                    <img className="wrench" src={Wrench}></img>
                    <img className="helmet" src={Helmet}></img>
                    <img className="screwdriver" src={Screwdriver}></img>
                </div>

            </div>

            <Section sectionTitle={title} id="development_section" dir="column" headingDir="row" headingCentered >
                <div className='card-wrapper'>
                    <OutlineCard type="big" title={Card1_Title} backgroundImg={circles} imageSrc={execution1} tag={<Tag color="yellow" text="Step 1"></Tag>}></OutlineCard>
                    <div className='card-wrapper__row'>
                        <OutlineCard type="small" title={Card2_Title} description={Card2_Description} backgroundImg={hollowCube} imageSrc={execution2} tag={<Tag color="primary" text="Design Implementation"></Tag>}></OutlineCard>
                        <OutlineCard type="small" title={Card3_Title} description={Card3_Description} backgroundImg={cross} imageSrc={execution3} tag={<Tag color="purple" text="Design System"></Tag>}></OutlineCard>
                    </div>
                </div>
            </Section>
        </React.Fragment>
    )
}