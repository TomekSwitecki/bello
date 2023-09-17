import React, { useState, useEffect } from 'react';
import { Section } from '../../Components/Section/Section';
import { Bubble } from '../../Components/Bubble/Bubble';
import { dots, emojis } from './const';
import { subtitle_en, subtitle_pl } from './const';
import { getRandomInt, getRandomFloat } from "../../../utils";
import { useTranslation } from 'react-i18next';
function BubblesSection() {
    const { t, i18n } = useTranslation();
    const userLanguage = i18n.language;


    const List_en = [
        { name: '🎨 Design a user interface', offsetY: 0, animationDelay: '0s' },
        { name: '🛠️ Code a new feature', offsetY: -90, animationDelay: '1s' },
        { name: '📱 Mobile responsiveness', offsetY: 90, animationDelay: '2.5s' },
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

    const List_pl = [
        { name: '🎨 Projektowanie interfejsu użytkownika', offsetY: 0, animationDelay: '0s' },
        { name: '🛠️ Kodowanie nowej funkcji', offsetY: -90, animationDelay: '1s' },
        { name: '📱 Responsywność mobilna', offsetY: 90, animationDelay: '2.5s' },
        { name: '📚 Uczenie się nowego narzędzia do projektowania', offsetY: -160, animationDelay: '3s' },
        { name: '📊 Analiza metryk użytkowników', offsetY: 180, animationDelay: '8.2s' },
        { name: '💡 Burza mózgów nad nowymi pomysłami', offsetY: 180, animationDelay: '-1s' },
        { name: '🔍 Przeprowadzanie badań użytkowników', offsetY: 180, animationDelay: '-4s' },
        { name: '🧪 Testowanie A/B funkcji', offsetY: -30, animationDelay: '-3.8s' },
        { name: '🌐 Responsywność strony internetowej', offsetY: -70, animationDelay: '-8s' },
        { name: '🔧 Debugowanie i naprawianie', offsetY: 70, animationDelay: '-4.2s' },
        { name: '📄 Pisanie dokumentacji technicznej', offsetY: 90, animationDelay: '-0.5s' },
        { name: '💬 Przegląd projektu UX', offsetY: 50, animationDelay: '-15s' },
        { name: '📐 Tworzenie szkiców', offsetY: 0, animationDelay: '-17.5s' },
        { name: '🔍 Testowanie użyteczności', offsetY: -100, animationDelay: '-14s' },
        { name: '📊 Wizualizacja danych', offsetY: -70, animationDelay: '-17s' },
        { name: '🌈 Wybór schematu kolorów', offsetY: 100, animationDelay: '-19s' },
        { name: '🔍 Mapowanie podróży użytkownika', offsetY: -150, animationDelay: '-16.4s' },
        { name: '🚀 Wprowadzanie nowej funkcji', offsetY: -170, animationDelay: '-13s' },
        { name: '🔧 Rozwiązywanie problemów zgodności z przeglądarkami', offsetY: -185, animationDelay: '-2.5s' },
        { name: '📝 Pisanie czystego kodu', offsetY: 0, animationDelay: '-9s' },
        { name: '🔍 Audyt dostępności', offsetY: -150, animationDelay: '-9.2s' },
        { name: '📈 Optymalizacja wydajności', offsetY: 0, animationDelay: '4s' },
        { name: '🔍 Analiza opinii użytkowników', offsetY: -30, animationDelay: '-12s' },
        { name: '🛠️ Rozwijanie responsywnego układu', offsetY: 90, animationDelay: '-10s' },
    ]

    const bubblesList = userLanguage === 'pl' ? List_pl : List_en;
    const subtitle = userLanguage === 'pl' ? subtitle_pl : subtitle_en;

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


    const sectionTitle = userLanguage === "pl" ? (
        <React.Fragment>
            😬 Tyle rzeczy do wzięcia pod uwagę...
        </React.Fragment>
    ) : (
        <React.Fragment>
            😬 Soo many things to consider...
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Section
                sectionTitle={sectionTitle}
                sectionSubtitle={subtitle}
                id="bubbles"
                dir="column"
                headingDir="column"
                justifyContent="center"
                headingCentered
            >
                <div className='bubble-container'>
                    {bubblesList.map((itemList) => (
                        renderBubble(itemList)
                    ))}
                </div>
            </Section>
        </React.Fragment>
    );
}

export default BubblesSection;