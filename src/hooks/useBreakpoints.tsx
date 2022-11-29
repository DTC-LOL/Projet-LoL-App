//react hook that return an object of all device sizes ex: isMobile, isTablet, isDesktop ... and also check the device orientation
import { useState, useEffect } from 'react';

const useBreakpoints = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isLandscape, setIsLandscape] = useState(false);
    const [isPortrait, setIsPortrait] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
            setIsTablet(false);
            setIsDesktop(false);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            setIsMobile(false);
            setIsTablet(true);
            setIsDesktop(false);
        } else {
            setIsMobile(false);
            setIsTablet(false);
            setIsDesktop(true);
        }
        if (window.innerWidth > window.innerHeight) {
            setIsLandscape(true);
            setIsPortrait(false);
        } else {
            setIsLandscape(false);
            setIsPortrait(true);
        }
    };

    useEffect(() => {
        handleResize();
    }, [])
    
    useEffect(() => {
        // handleResize();
        // console.log('isMobile', isMobile);
        // console.log('isTablet', isTablet);
        // console.log('isDesktop', isDesktop);
        // console.log('isLandscape', isLandscape);
        // console.log('isPortrait', isPortrait);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });
    
    return { isMobile, isTablet, isDesktop, isLandscape, isPortrait };
};

export default useBreakpoints;