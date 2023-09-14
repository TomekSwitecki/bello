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
export function HowWeDoIt() {
    const [breakpointReached, setBreakpointReached] = useState(window.innerWidth <= 1024);

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

    return (
        <React.Fragment>
            <Section sectionTitle={title} sectionSubtitle={subtitle} id="how_we_do_it" dir="column" headingDir="column" justifyContent="center" headingCentered>
                <div className='cards__container'>
                    <h2>This is how we do it</h2>
                    <div className='cards__row--top'>
                        <PlainCard type="big" title={Card1_Title} description={Card1_Description} imageSrc={maze} tag={<Tag color="blue" text="Step 1"></Tag>}></PlainCard>
                        <PlainCard type="big" title={Card2_Title} description={Card2_Description} imageSrc={card} tag={<Tag color="yellow" text="Step 2"></Tag>}></PlainCard>
                    </div>
                    <div className='cards__row--bottom'>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={Card2_Title} description={Card2_Description} imageSrc={agree} tag={<Tag color="purple" text="Step 3"></Tag>}></PlainCard>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={Card2_Title} description={Card2_Description} imageSrc={work} tag={<Tag color="red" text="Step 4"></Tag>}></PlainCard>
                        <PlainCard type={breakpointReached ? 'big' : 'small'} title={Card2_Title} description={Card2_Description} imageSrc={message} tag={<Tag color="primary" text="Step 5"></Tag>}></PlainCard>
                    </div>
                </div>
            </Section>
        </React.Fragment>
    );
}
