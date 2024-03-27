import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import { HEADER } from 'constants/config.ts';
// assets
import { ChevronUpDownIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import AvatarPng from 'assets/images/avatar.png';

const Header: React.FC = () => {
  const { themeLayout, onToggleLayout } = useThemeContext();
  const navigate = useNavigate();

  return (
    <div
      className={`bg-grey-800 border-b border-b-grey-700 w-full flex flex-row items-center px-6 ${
        themeLayout === 'mini' ? 'justify-between' : 'justify-end'
      }`}
      style={{
        minHeight: `${HEADER.H_MAIN_DESKTOP}px`,
      }}
    >
      {themeLayout === 'mini' && (
        <div
          role="button"
          className="p-2 rounded-primary border border-grey-700 hover:bg-grey-700"
          onClick={() => navigate('/')}
        >
          <PencilSquareIcon className="w-5 h-5 text-secondary" />
        </div>
      )}
      <div className="flex flex-row items-center">
        <img src={AvatarPng} alt="" className="w-10 h-10 rounded-full" />
        <div className="flex flex-col ml-3 mr-2">
          <p className="text-primary text-sm">Jacob Jones</p>
          <p className="text-secondary text-sm">jacobjones@gmail.com</p>
        </div>
        <div role="button" className="py-2 px-1 hover:bg-grey-300/10 rounded-primary">
          <ChevronUpDownIcon className="h-6 w-6 text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Header;
