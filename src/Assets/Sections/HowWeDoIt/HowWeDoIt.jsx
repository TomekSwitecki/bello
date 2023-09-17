import React, { useState, useEffect } from 'react';
import Tag from '../../Components/Tag/Tag';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title, subtitle, Card1_Title, Card1_Description, Card2_Title, Card2_Description, Card3_Title } from "./const";
import maze from "../../../Resources/Palms/maze.png";
import card from "../../../Resources/Palms/card.png"
import agree from "../../../Resources/Palms/agree.png";
import message from "../../../Resources/Palms/message.png";
import work from "../../../Resources/Palms/work.png";
import PlainCard from '../../Components/PlainCard/PlainCard';
import { Marker, MarkerColor } from "../../Components/Marker/Marker";
import { useTranslation } from 'react-i18next';
export function HowWeDoIt() {
    const { t, i18n } = useTranslation();
    const [breakpointReached, setBreakpointReached] = useState(window.innerWidth <= 1024);
    const userLanguage = i18n.language;
    useEffect(() => {
        const handleResize = () => {
            setBreakpointReached(window.innerWidth <= 1024);
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sectionTitle = userLanguage === "pl" ? (
        <React.Fragment>
            ...nie martw się, <Marker> my</Marker> <Marker>się</Marker> <Marker>wszystkim</Marker> <Marker>zajmiemy </Marker>😌
        </React.Fragment >
    ) : (
        <React.Fragment>
            ...but dont worry, <Marker> we</Marker> <Marker>got</Marker> <Marker>you</Marker> <Marker>covered </Marker>😌
        </React.Fragment >
    );

    return (
        <React.Fragment>
            <Section sectionTitle={sectionTitle} sectionSubtitle={t('2_subtitle')} id="how_we_do_it" dir="column" headingDir="column" justifyContent="center" headingCentered>
                <div className='cards__container'>
                    <h2>{t('this_is_how_we_do_it')}</h2>
                    <div className='cards__row--top'>
                        <PlainCard type="big" title={t('3_Card1_Title')} description={t('3_Card1_Description')} imageSrc={maze} tag={<Tag color="blue" text={t('step_1')}></Tag>}></PlainCard>
                        <PlainCard type="big" title={t('3_Card2_Title')} description={t('3_Card2_Description')} imageSrc={card} tag={<Tag color="yellow" text={t('step_2')}></Tag>}></PlainCard>
                    </div>
                    <div className='cards__row--bottom'>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={t('3_Card3_Title')} description={t('3_Card3_Description')} imageSrc={agree} tag={<Tag color="purple" text={t('step_3')}></Tag>}></PlainCard>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={t('3_Card4_Title')} description={t('3_Card4_Description')} imageSrc={work} tag={<Tag color="red" text={t('step_4')}></Tag>}></PlainCard>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={t('3_Card5_Title')} description={t('3_Card5_Description')} imageSrc={message} tag={<Tag color="primary" text={t('step_5')}></Tag>}></PlainCard>
                    </div>
                </div>
            </Section>
        </React.Fragment>
    );
}
