import { motion } from 'framer-motion';
import { useState, useEffect, useCallback, useMemo } from 'react';

const TypingAnimation = ({ text, className = "", delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    // Memoize the text to prevent unnecessary re-renders
    const memoizedText = useMemo(() => text, [text]);

    const updateText = useCallback(() => {
        if (currentIndex < memoizedText.length) {
            setDisplayedText(memoizedText.slice(0, currentIndex + 1));
            setCurrentIndex(prev => prev + 1);
        }
    }, [currentIndex, memoizedText]);

    useEffect(() => {
        const timer = setTimeout(updateText, 80 + delay); // Slightly faster typing
        return () => clearTimeout(timer);
    }, [updateText, delay]);

    return (
        <motion.div 
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: delay / 1000 }}
            style={{ willChange: 'opacity' }}
        >
            {displayedText}
            <motion.span
                className="text-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                style={{ willChange: 'opacity' }}
            >
                |
            </motion.span>
        </motion.div>
    );
};

export default TypingAnimation;