import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChat } from 'types/chats.ts';
import { NAV } from 'constants/config.ts';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export interface IChatItemProps extends IChat {}

const ChatItem: React.FC<IChatItemProps> = ({ title, link = '/' }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const active = useMemo(() => id === link, [id, link]);

  return (
    <div
      role="button"
      className={`w-full flex flex-row items-center justify-between bg-transparent hover:bg-grey-700 rounded-primary text-primary text-sm p-3 ${
        active && 'bg-grey-700 font-bold'
      }`}
      onClick={() => navigate(`chats/${link}`)}
    >
      <span
        className="overflow-hidden overflow-ellipsis whitespace-nowrap"
        style={{
          width: active ? `${NAV.W_DASHBOARD - 82}px` : `${NAV.W_DASHBOARD - 54}px`,
        }}
      >
        {title}
      </span>
      {active && (
        <div role="button">
          <EllipsisHorizontalIcon className="h-5 w-5 text-primary font-bold" />
        </div>
      )}
    </div>
  );
};

export default ChatItem;
