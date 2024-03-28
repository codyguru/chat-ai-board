import { ReactElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ==============================|| NAVIGATION - SCROLL TO BOTTOM ||============================== //

const ScrollBottom = ({ children }: { children: ReactElement | null }) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    // Use `document.body.scrollHeight` to get the total scrollable height of the document
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]); // Depend on `pathname` to trigger scroll on route change

  return children || null;
};

export default ScrollBottom;
