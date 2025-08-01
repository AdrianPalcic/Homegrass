import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top on route change or reload
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTop;
