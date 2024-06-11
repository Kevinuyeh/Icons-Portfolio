import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed = 100, delay = 4000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const resetTimeout = setTimeout(() => {
                setDisplayedText('');
                setIndex(0);
            }, delay);
            return () => clearTimeout(resetTimeout);
        }
    }, [index, text, speed, delay]);

    return <span>{displayedText}</span>;
};

export default TypingEffect;
