import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);
    const [isMobile, setIsMobile] = useState(
        typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
    );
    const particleCount = 150; // Much more particles

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < particleCount; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                    y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                    size: Math.random() * 5 + 3, // Slightly more consistent size
                    duration: Math.random() * 20 + 20, // Much slower animation so they stay longer
                    delay: Math.random() * 3, // Less delay
                });
            }
            return newParticles;
        };

        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            setParticles(generateParticles());
        }

        let resizeTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const mobile = window.innerWidth < MOBILE_BREAKPOINT;
                setIsMobile(mobile);
                if (!mobile) {
                    setParticles(generateParticles());
                }
            }, 250);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute bg-cyan-400/40 rounded-full"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: particle.x,
                        top: particle.y,
                    }}
                    animate={{
                        y: [particle.y, particle.y - 120, particle.y], 
                        x: [particle.x, particle.x + 40, particle.x - 40, particle.x], 
                        opacity: [0.2, 0.9, 0.2], // Always somewhat visible
                        scale: [0.8, 1.2, 0.8], // Don't scale to 0
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;