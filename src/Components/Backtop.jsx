import React, { useState, useEffect } from 'react';
import backtotop from '../assets/img/back-to-top.webp'
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Add scroll event listener to show/hide the button
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Remove the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <>
            <button
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } fixed z-30 min-[550px]:bottom-8 bottom-2 min-[550px]:right-8 right-2 p-2 bg-[white] hover:shadow-[0px_0px_12px_4px_rgba(223,232,229,0.36)]   border border-[white] border-silod text-white rounded-full transition-opacity duration-300 ease-in-out focus:outline-none animate-bounce`}
                onClick={scrollToTop}
            >
                <img src={backtotop} alt="backtotop" className='max-w-[35px] max-h-[35px]' />
            </button>
        </>
    );
};
export default BackToTop;