import React from 'react';
import { Section } from "../../Components/Section/Section";
import { title, Card1_Title, Card1_Description, Card2_Title, Card2_Description, Card3_Title, Card3_Description, Card4_Title, Card4_Description } from "./const";
import ModernCard from '../../Components/ModernCard/ModernCard';
import circles from "../../../Resources/Bloom/circles.png";
import hollowCube from "../../../Resources/Bloom/hollow-cube.png";
import semiRectangle from "../../../Resources/Bloom/semi-rectangle.png";
import cross from "../../../Resources/Bloom/cross.png";
import BigVernon from "../../../Resources/Avatars/BigVernon.png";
import Weather from "../../../Resources/Carmel/weather.png";
import Chart from "../../../Resources/Carmel/chart.png";
import Music from "../../../Resources/Carmel/music.png";
import Study from "../../../Resources/Carmel/study.png";
import Calendar from "../../../Resources/Carmel/calendar.png";
import Sparkles from "../../../Resources/Emoji/sparkles.png";
import Hearts from "../../../Resources/Emoji/hearts.png";
import { ArrowsMoveNavigate, CheckListFile, AgreementArrowIncrease, RotatingArrowsRight, CheckFile, TeamLaptopRemoteWorking } from '@vectopus/atlas-icons-react';
export function BrandSection() {

    return (
        <React.Fragment>
            <Section sectionTitle={title} id="brand_section" dir="column" headingDir="row" justifyContent="start" >
                <div className='card-wrapper'>
                    <div className='card-wrapper__row'>
                        <ModernCard id="all" type={"primary"} icon={<ArrowsMoveNavigate size={24} />} title={Card1_Title} description={Card1_Description} backgroundImg={hollowCube}></ModernCard>
                        <ModernCard id="guidelines" type={"secondary"} icon={<CheckFile size={24} />} title={Card2_Title} description={Card2_Description} backgroundImg={semiRectangle}></ModernCard>
                    </div>
                    <div className='card-wrapper__row'>
                        <ModernCard id="colab" type={"secondary"} icon={<AgreementArrowIncrease size={24} />} title={Card3_Title} description={Card3_Description} backgroundImg={cross}></ModernCard>
                        <ModernCard id="revisions" type={"primary"} icon={<RotatingArrowsRight size={24} />} title={Card4_Title} description={Card4_Description} backgroundImg={circles}></ModernCard>
                    </div>
                </div>
                <div className='vernon-wrapper'>
                    <img src={BigVernon}></img>
                    <div className='app-icons'>
                        <img className='icon icon--weather' src={Weather}></img>
                        <img className='icon icon--chart' src={Chart}></img>
                        <img className='icon icon--music' src={Music}></img>
                        <img className='icon icon--study' src={Study}></img>
                        <img className='icon icon--calendar' src={Calendar}></img>
                        <img className='icon icon--sparkles' src={Sparkles}></img>
                        <img className='icon icon--hearts' src={Hearts}></img>
                    </div>
                </div>
            </Section>
        </React.Fragment>
    );
}
