import { useEffect, useState } from 'react';

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.max(50, Math.floor(window.innerWidth * window.innerHeight / 8000));
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 2, // Random size between 2 and 5
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.4 + 0.6, // Random opacity between 0.6 and 1
                animationDuration: Math.random() * 4 + 2, // Random duration between 2 and 6 seconds
            });
        }
        setStars(newStars);
        console.log(`Generated ${numberOfStars} stars`); // Debug log
    };


    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 2, // Random size between 2 and 4
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15, // Random delay between 0.6 and 1.2
                animationDuration: Math.random() * 3 + 3, // Random duration between 2 and 6 seconds
            });
        }
        setMeteors(newMeteors);
        console.log(`Generated ${numberOfMeteors} meteors`); // Debug log
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map(star => (
                <div 
                    key={star.id} 
                    className="absolute rounded-full animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                        backgroundColor: 'white',
                        boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
                    }} 
                />
            ))}

            {meteors.map(meteor => (
                <div 
                    key={meteor.id} 
                    className="meteor animate-meteor absolute rounded-full"
                    style={{
                        width: `${meteor.size * 50}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.animationDuration}s`,
                        
                    }} 
                />
            ))}
        </div>
    );
};
  
