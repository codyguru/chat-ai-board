import React, { useState } from 'react';
import { HEADER, NAV } from 'constants/config.ts';
import { Logo } from 'components/logo';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface IDrawerHeaderProps {
  search: string;
  onSearch: (search: string) => void;
}

const DrawerHeader: React.FC<IDrawerHeaderProps> = ({ search, onSearch }) => {
  const [isSearch, setSearch] = useState<boolean>(false);

  const toggleSearchBox = () => setSearch(!isSearch);

  return (
    <div
      className="relative flex flex-row items-center border-b border-b-grey-700 w-full px-4"
      style={{
        height: `${HEADER.H_MAIN_DESKTOP}px`,
      }}
    >
      <div
        role="button"
        className={`absolute top-1/2 -translate-y-1/2 ${isSearch ? 'right-8' : 'right-4'}`}
        onClick={toggleSearchBox}
      >
        <MagnifyingGlassIcon className="w-5 h-5 text-secondary font-bold" />
      </div>
      {!isSearch && <Logo />}
      <div className="transition-all duration-200 ease-in-out">
        {isSearch && (
          <input
            type="text"
            className="bg-grey-800 border-2 border-grey-700 rounded-full focus:outline-none text-primary text-sm pl-3 pr-9 py-2"
            style={{
              width: `${NAV.W_DASHBOARD - 32}px`,
            }}
            value={search}
            onChange={(e) => onSearch(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default DrawerHeader;
