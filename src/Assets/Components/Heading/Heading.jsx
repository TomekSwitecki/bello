
import React, { useState, useEffect, useRef } from 'react';
export function Heading() {
  const FORWARD = 'forward';
  const BACKWARD = 'backward';

  const useTypingText = (
    words,
    keySpeed = 1000,
    maxPauseAmount = 10,
  ) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));

    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    useEffect(() => {
      let pauseCounter = 0;

      typingInterval.current = setInterval(() => {

        if (pauseCounter > 0) {
          pauseCounter = pauseCounter - 1;
          return;
        }

        if (direction.current === FORWARD) {
          typeLetter();
        } else {
          backspace();
        }
      }, keySpeed);

      const backspace = () => {
        if (letterIndex.current === 0) {
          const isOnLastWord = wordIndex === words.length - 1;

          setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
          direction.current = FORWARD;

          return;
        }

        const segment = currentWord.slice(0, currentWord.length - 1);
        setCurrentWord(segment);
        letterIndex.current = currentWord.length - 1;
      }

      const typeLetter = () => {
        if (letterIndex.current >= words[wordIndex].length) {
          direction.current = BACKWARD;
          pauseCounter = maxPauseAmount;
          return;
        }

        const segment = words[wordIndex].split('');
        setCurrentWord(currentWord.concat(segment[letterIndex.current]));
        letterIndex.current = letterIndex.current + 1;
      }

      return () => {
        clearInterval(typingInterval.current);
      }
    }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);

    return {
      word: (
        <span className={`word ${currentWord.length ? 'full' : 'empty'}`}>
          <span>{currentWord.length ? currentWord.join('') : '0'}</span>
        </span>
      ),
    };
  }
  const { word } = useTypingText(['solutions', 'UI/UX', 'Brands'], 130, 20);
  return (
    <div className="heading">
      <div className="heading__title">We design
        <span className="yellow-marker">{word}</span>|  </div>
      <div className="heading__subtitle">
        We will help you to create product of your dreams.
        Websites, apps, branding, logo.
        We got it all.
      </div>
    </div>
  );
}
