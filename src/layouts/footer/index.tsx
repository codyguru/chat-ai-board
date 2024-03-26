import React from 'react';
import { FOOTER } from 'constants/config.ts';

const Footer: React.FC = () => {
  return (
    <div
      className="bg-grey-800 border-t border-t-grey-700 w-full"
      style={{
        minHeight: `${FOOTER.H_MAIN_DESKTOP}px`,
      }}
    >
      Footer
    </div>
  );
};

export default Footer;
