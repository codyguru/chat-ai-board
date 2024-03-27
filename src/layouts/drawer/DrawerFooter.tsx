import React from 'react';
import { FOOTER } from 'constants/config.ts';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import useResponsive from 'hooks/useResponsive.ts';

const DrawerFooter: React.FC = () => {
  const { themeLayout } = useThemeContext();
  const downMD = useResponsive('down', 'md');

  return (
    <div
      className="flex flex-row items-center justify-center border-t border-t-grey-700 w-full"
      style={{
        height: `${FOOTER.H_MAIN_DESKTOP}px`,
        ...(downMD && themeLayout === 'vertical' && { display: 'none' }),
      }}
    >
      <p className="mb-0 text-primary text-sm">@2024 Hospitelligence.ai</p>
    </div>
  );
};

export default DrawerFooter;
