import React, { useCallback, useState } from 'react';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import useResponsive from 'hooks/useResponsive.ts';
import { NAV } from 'constants/config.ts';
import MobileDrawer from './MobileDrawer.tsx';
import DrawerHeader from './DrawerHeader.tsx';
import DrawerContent from './drawer-content/DrawerContent.tsx';
import DrawerFooter from './DrawerFooter.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Drawer: React.FC = () => {
  const { themeLayout, onToggleLayout } = useThemeContext();
  const downMD = useResponsive('down', 'md');
  const [search, setSearch] = useState<string>('');

  const handleSearchQuery = useCallback(
    (query: string) => {
      setSearch(query);
      // Todo: Send request with query
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  return (
    <>
      <div
        className="relative bg-grey-800 border-l-0 border-r border-r-grey-700 h-full transition-all duration-200 ease-in-out"
        style={{
          minWidth:
            !downMD && themeLayout == 'vertical'
              ? `${NAV.W_DASHBOARD}px`
              : `${NAV.W_DASHBOARD_MINI}px`,
        }}
      >
        <div
          role="button"
          className="absolute bg-grey-800 rounded-primary -right-10 top-1/2 -translate-y-1/2 p-1 cursor-pointer hover:bg-grey-700 z-[999]"
          onClick={() => onToggleLayout()}
          style={{ ...(downMD && { display: 'none' }) }}
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
          <DrawerHeader search={search} onSearch={handleSearchQuery} />
          <DrawerContent />
          <DrawerFooter />
        </div>
      </div>

      {downMD && <MobileDrawer />}
    </>
  );
};

export default Drawer;
