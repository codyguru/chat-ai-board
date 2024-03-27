import React from 'react';
import ChatItem from './ChatItem.tsx';
import { IChatsGroup } from 'types/chats.ts';

export interface IChatsGroupProps extends IChatsGroup {}

const ChatsGroup: React.FC<IChatsGroupProps> = ({ title, chats }) => {
  return (
    <div className="w-full flex flex-col">
      <p className="text-secondary text-sm mb-2">{title}</p>
      <div className="flex flex-col gap-1">
        {chats.length && chats.map((chat) => <ChatItem key={chat.title} {...chat} />)}
      </div>
    </div>
  );
};

export default ChatsGroup;
