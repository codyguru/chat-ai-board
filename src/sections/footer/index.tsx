import React, { useState } from 'react';
import { FOOTER } from 'constants/config.ts';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

export interface IFooterProps {
  onSendMessage: (message: string) => void;
}

const Footer: React.FC<IFooterProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>('');

  return (
    <div
      className="bg-grey-800 border-t border-t-grey-700 w-full flex flex-row relative"
      style={{
        minHeight: `${FOOTER.H_MAIN_DESKTOP}px`,
      }}
    >
      <input
        type="text"
        className="w-full bg-grey-800 focus:outline-none pl-4 md:pl-6 pr-16 md:pr-20 text-secondary placeholder:font-thin"
        placeholder="Enter your chat here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div
        role="button"
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 w-9 h-9 bg-base-gradient rounded-primary z-[999] flex items-center justify-center"
        onClick={() => onSendMessage(message)}
      >
        <PaperAirplaneIcon className="text-secondary w-6 h-6 hover:text-primary" />
      </div>
    </div>
  );
};

export default Footer;
