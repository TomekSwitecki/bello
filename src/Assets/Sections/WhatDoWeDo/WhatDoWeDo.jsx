import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Section } from "../../Components/Section/Section";
import { title } from "./const";
import { title as title_pl } from "./const_pl";
import VerticalCard, { CardColor } from '../../Components/VerticalCard/VerticalCard';
import digitalProccess from "../../../Resources/UIUXilustrations/digitalProccess.png";
import newFunctions from "../../../Resources/UIUXilustrations/newFunctions.png";
import debugging from "../../../Resources/UIUXilustrations/debugging.png";
import IconAvatar, { AvatarColor } from '../../Components/IconAvatar/IconAvatar';
import { Anchor, PencilPaper, CodingWebsite } from "@vectopus/atlas-icons-react";
import { _scrollTo } from "../../../utils";
import { useTranslation } from 'react-i18next';
export function WhatDoWeDo() {
    const { t, i18n } = useTranslation();
    const userLanguage = i18n.language;
    const titleTranslation = () => {
        if (userLanguage == "en") {
            return (title);
        }
        else {
            return (title_pl);
        }
    }

    const handleScrollToId = (id, offset) => {
        const element = document.getElementById(id);
        if (element) {
            _scrollTo(id, offset);
        }
    };

    return (
        <React.Fragment>
            <Section sectionTitle={titleTranslation()} sectionSubtitle={t('2_subtitle')} id="about_us" dir="column" headingDir="row" justifyContent="center" >
                <div className='cards_container'>
                    <VerticalCard action={() => handleScrollToId("brand_section", 220)} iconAvatar={<IconAvatar color={AvatarColor.Yellow} icon={<PencilPaper />} />} color={CardColor.Blue} title={t('2_Card1_Title')} description={t('2_Card1_Description')} imageSrc={digitalProccess} buttonText={t('learn_more')}></VerticalCard>
                    <VerticalCard action={() => handleScrollToId("design_section", 220)} iconAvatar={<IconAvatar color={AvatarColor.Blue} icon={<Anchor />} />} color={CardColor.Red} title={t('2_Card2_Title')} description={t('2_Card2_Description')} imageSrc={newFunctions} buttonText={t('learn_more')}></VerticalCard>
                    <VerticalCard action={() => handleScrollToId("development_section", 220)} iconAvatar={<IconAvatar color={AvatarColor.Purple} icon={<CodingWebsite />} />} color={CardColor.Yellow} title={t('2_Card3_Title')} description={t('2_Card3_Description')} imageSrc={debugging} buttonText={t('learn_more')}></VerticalCard>
                </div>
            </Section>
        </React.Fragment>
    );
}
