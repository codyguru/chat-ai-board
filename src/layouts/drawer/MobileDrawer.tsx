import React from 'react';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import { HEADER, NAV } from 'constants/config.ts';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const MobileDrawer: React.FC = () => {
  const { themeLayout, onToggleLayout } = useThemeContext();

  return (
    <>
      <div
        className="absolute inset-0 bg-grey-600/40 z-30"
        style={{ ...(themeLayout == 'mini' && { display: 'none' }) }}
      />
      <div
        className="absolute bg-grey-800 border-l-0 border-r border-r-grey-700 h-full transition-all duration-200 ease-in-out z-[900] left-0"
        style={{
          minWidth:
            themeLayout == 'vertical' ? `${NAV.W_DASHBOARD}px` : `${NAV.W_DASHBOARD_MINI}px`,
        }}
      >
        <div
          role="button"
          className="absolute bg-grey-800 rounded-primary -right-10 top-1/2 -translate-y-1/2 p-1 cursor-pointer hover:bg-grey-700 z-[999]"
          onClick={() => onToggleLayout()}
        >
          {themeLayout === 'mini' ? (
            <ChevronRightIcon className="text-secondary h-5 w-5" />
          ) : (
            <ChevronLeftIcon className="text-secondary h-5 w-5" />
          )}
        </div>
        <div
          className="flex flex-col"
          style={{ ...(themeLayout == 'mini' && { display: 'none' }) }}
        >
          Mobile Drawer
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
