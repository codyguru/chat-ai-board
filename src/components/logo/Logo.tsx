import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export interface ILogoProps {
  disabledLink?: boolean;
}

const Logo: React.FC<ILogoProps> = ({ disabledLink = false }) => {
  const textLogo = <span className="text-primary font-bold">HospiTelligence.ai</span>;

  if (disabledLink) return textLogo;
  return <RouterLink to="/">{textLogo}</RouterLink>;
};

export default Logo;
