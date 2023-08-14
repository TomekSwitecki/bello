import { useState, useEffect, useRef } from 'react';

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
            <span className="typing-word-wrapper">
                <span className="yellow-marker"><div className={`typing-word ${currentWord.length ? 'typing-word--full' : 'typing-word--empty'}`}>{currentWord.length ? currentWord.join('') : '|'}</div></span>
                <div className='typing-word__cursor'></div>
            </span >
        ),
    };
}

export default useTypingText;