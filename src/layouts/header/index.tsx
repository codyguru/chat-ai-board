import React from 'react';
import { HEADER, NAV } from 'constants/config.ts';

const Header: React.FC = () => {
  return (
    <div
      className="bg-grey-800 border-b border-b-grey-700 w-full"
      style={{
        minHeight: `${HEADER.H_MAIN_DESKTOP}px`,
      }}
    >
      Header
    </div>
  );
};

export default Header;
