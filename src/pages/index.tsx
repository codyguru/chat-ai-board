import React from 'react';
import Footer from 'sections/footer';
import { FOOTER, HEADER } from 'constants/config.ts';

const IndexPage: React.FC = () => {
  const handleSendMessage = (message: string) => {};

  return (
    <div className="flex flex-col w-full">
      <div
        className="overflow-y-auto px-6 py-6 md:px-9 md:py-12"
        style={{ height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP + FOOTER.H_MAIN_DESKTOP}px)` }}
      >
        <div className="max-w-lg mx-auto">
          <p className="text-white">Chats</p>
        </div>
      </div>
      <Footer onSendMessage={handleSendMessage} />
    </div>
  );
};

export default IndexPage;
