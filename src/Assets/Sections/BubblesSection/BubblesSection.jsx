import React, { useState, useEffect } from 'react';
import { Section } from '../../Components/Section/Section';
import { Bubble } from '../../Components/Bubble/Bubble';
import { dots, emojis } from './const';
import { title, subtitle, subtitle_ } from './const';
import { getRandomInt, getRandomFloat } from "../../../utils";

function BubblesSection() {


    const List = [
        { name: '🎨 Design a user interface', offsetY: 0, animationDelay: '0s' },
        { name: '🛠️ Code a new feature', offsetY: -90, animationDelay: '1s' },
        { name: '📱 Mobile app optimization', offsetY: 90, animationDelay: '2.5s' },
        { name: '📚 Learn a new design tool', offsetY: -160, animationDelay: '3s' },
        { name: '📊 Analyze user metrics', offsetY: 180, animationDelay: '8.2s' },
        { name: '💡 Brainstorm new ideas', offsetY: 180, animationDelay: '-1s' },
        { name: '🔍 Conduct user research', offsetY: 180, animationDelay: '-4s' },
        { name: '🧪 A/B test a feature', offsetY: -30, animationDelay: '-3.8s' },
        { name: '🌐 Website responsiveness', offsetY: -70, animationDelay: '-8s' },
        { name: '🔧 Debugging and fixing', offsetY: 70, animationDelay: '-4.2s' },
        { name: '📄 Write technical documentation', offsetY: 90, animationDelay: '-0.5s' },
        { name: '💬 UX design review', offsetY: 50, animationDelay: '-15s' },
        { name: '📐 Wireframing', offsetY: 0, animationDelay: '-17.5s' },
        { name: '🔍 Usability testing', offsetY: -100, animationDelay: '-14s' },
        { name: '📊 Data visualization', offsetY: -70, animationDelay: '-17s' },
        { name: '🌈 Color scheme exploration', offsetY: 100, animationDelay: '-19s' },
        { name: '🔍 User journey mapping', offsetY: -150, animationDelay: '-16.4s' },
        { name: '🚀 Launch a new feature', offsetY: -170, animationDelay: '-13s' },
        { name: '🔧 Fix cross-browser issues', offsetY: -185, animationDelay: '-2.5s' },
        { name: '📝 Write clean code', offsetY: -0, animationDelay: '-9s' },
        { name: '🔍 Accessibility audit', offsetY: -150, animationDelay: '-9.2s' },
        { name: '📈 Performance optimization', offsetY: 0, animationDelay: '4s' },
        { name: '🔍 User feedback analysis', offsetY: -30, animationDelay: '-12s' },
        { name: '🛠️ Develop a responsive layout', offsetY: 90, animationDelay: '-10s' },
    ];



    const renderBubble = ({ name, offsetY, animationDelay }) => {
        const clientHeight = 430;
        const offsetTop = (clientHeight || 0) / 2;
        const randomOption = Math.floor(Math.random() * 6);
        return (
            <Bubble
                style={{
                    animationDelay,
                    top: offsetTop + offsetY,
                }}
                id={"variant_" + randomOption}
                dot={dots[getRandomInt(0, dots.length)]}

                value={name}
            />
        );
    };

    return (
        <React.Fragment>
            <Section
                sectionTitle={title}
                sectionSubtitle={subtitle_}
                id="bubbles"
                dir="column"
                headingDir="column"
                justifyContent="center"
                headingCentered
            >
                <div className='bubble-container'>
                    {List.map((itemList) => (
                        renderBubble(itemList)
                    ))}
                </div>
            </Section>
        </React.Fragment>
    );
}

export default BubblesSection;