import React from 'react';
import { FOOTER } from 'constants/config.ts';

const DrawerFooter: React.FC = () => {
  return (
    <div
      className="flex flex-row items-center justify-center border-t border-t-grey-700 w-full"
      style={{
        height: `${FOOTER.H_MAIN_DESKTOP}px`,
      }}
    >
      <p className="mb-0 text-primary text-sm">@2024 Hospitelligence.ai</p>
    </div>
  );
};

export default DrawerFooter;
