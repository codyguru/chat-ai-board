import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'layouts/header';
import Footer from 'layouts/footer';
import Drawer from 'layouts/drawer';
import { HEADER, FOOTER } from 'constants/config.ts';
import useResponsive from 'hooks/useResponsive.ts';
import { useThemeContext } from 'theme/ThemeContext.tsx';

const MainLayout: React.FC = () => {
  const { themeLayout, setLayout } = useThemeContext();
  const downMD = useResponsive('down', 'md');

  useEffect(() => {
    if (downMD && themeLayout !== 'mini') {
      setLayout('mini');
    } else if (themeLayout != 'vertical') {
      setLayout('vertical');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [downMD]);

  return (
    <div className="flex flex-row w-full h-screen">
      <Drawer />

      <div className="flex flex-col w-full flex-grow bg-grey-900">
        <Header />
        <main
          className="container mx-auto relative flex flex-col overflow-auto  h-full"
          style={{ maxHeight: `calc(100vh - ${HEADER.H_MAIN_DESKTOP + FOOTER.H_MAIN_DESKTOP}px)` }}
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
