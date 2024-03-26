import React from 'react';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import { HEADER, NAV } from 'constants/config.ts';

const Drawer: React.FC = () => {
  const { themeLayout, onToggleLayout } = useThemeContext();

  return (
    <div
      className="flex flex-col bg-grey-800 border-l-0 border-r border-r-grey-700 h-full overflow-auto"
      style={{
        width: themeLayout == 'vertical' ? `${NAV.W_DASHBOARD}px` : `${NAV.W_DASHBOARD_MINI}px`,
      }}
    >
      Drawer
    </div>
  );
};

export default Drawer;
