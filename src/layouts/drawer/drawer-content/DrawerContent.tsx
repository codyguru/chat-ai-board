import React from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from 'components/Divider.tsx';
import { HEADER, FOOTER } from 'constants/config.ts';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';
import ChatsGroup from './ChatsGroup.tsx';
import { IChatsGroup } from 'types/chats.ts';

// Todo: Should be fetched for chats history
const CHAT_HISTORY: IChatsGroup[] = [
  {
    title: 'Today',
    chats: [
      {
        title: 'How to enhance UI performance in React',
        link: 'how_to_enhance_ui_performance_in_react',
      },
      {
        title: 'Awesome Chat UI Board',
        link: 'awesome_char_ui_board',
      },
    ],
  },
  {
    title: 'Yesterday',
    chats: [
      {
        title: 'Well structured code base',
        link: 'well_structured_code_base',
      },
      {
        title: 'Clean UI',
        link: 'clean_ui',
      },
      {
        title: 'React v18 + TypeScript + Tailwind CSS + Vite Project',
        link: 'react_v18_typescript_tailwind_css_vite_project',
      },
    ],
  },
];

const DrawerContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex flex-col p-4 overflow-y-auto"
      style={{
        minHeight: `calc(100vh - ${HEADER.H_MAIN_DESKTOP + FOOTER.H_MAIN_DESKTOP}px)`,
      }}
    >
      <div
        role="button"
        className="bg-base-gradient rounded-full w-full flex items-center justify-center gap-2 p-3"
        onClick={() => navigate('/')}
      >
        <ChatBubbleLeftIcon className="h-5 w-5 text-primary font-bold" />
        <span className="text-primary text-sm font-bold">New Chat</span>
      </div>
      <Divider />
      <div className="flex flex-col">
        {CHAT_HISTORY.map((chatsGroup, index) => (
          <div key={index} className="flex flex-col">
            <ChatsGroup {...chatsGroup} />
            {index != CHAT_HISTORY.length - 1 && <Divider />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
