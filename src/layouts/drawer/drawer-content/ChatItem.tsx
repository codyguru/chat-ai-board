import React, { useCallback, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tooltip } from '@material-tailwind/react';
import { useThemeContext } from 'theme/ThemeContext.tsx';
import useResponsive from 'hooks/useResponsive.ts';
import { IChat } from 'types/chats.ts';
import { NAV } from 'constants/config.ts';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export interface IChatItemProps extends IChat {}

const ChatItem: React.FC<IChatItemProps> = ({ title, link = '/' }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { themeLayout, onToggleLayout } = useThemeContext();
  const downMD = useResponsive('down', 'md');

  const active = useMemo(() => id === link, [id, link]);

  const handleClick = useCallback(
    () => {
      navigate(`chats/${link}`);
      if (downMD && themeLayout === 'vertical') onToggleLayout();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [link, themeLayout, downMD]
  );

  return (
    <div
      role="button"
      className={`w-full flex flex-row items-center justify-between bg-transparent hover:bg-grey-700 rounded-primary text-primary text-sm p-3 ${
        active && 'bg-grey-700 font-bold'
      }`}
      onClick={handleClick}
    >
      {downMD ? (
        <span
          className="overflow-hidden overflow-ellipsis whitespace-nowrap"
          style={{
            width: active ? `${NAV.W_DASHBOARD - 82}px` : `${NAV.W_DASHBOARD - 54}px`,
          }}
        >
          {title}
        </span>
      ) : (
        <Tooltip
          content={title}
          placement="right"
          offset={active ? 58 : 32}
          className="bg-grey-300/30 p-3 rounded-primary"
        >
          <span
            className="overflow-hidden overflow-ellipsis whitespace-nowrap"
            style={{
              width: active ? `${NAV.W_DASHBOARD - 82}px` : `${NAV.W_DASHBOARD - 54}px`,
            }}
          >
            {title}
          </span>
        </Tooltip>
      )}
      {active && (
        <div role="button">
          <EllipsisHorizontalIcon className="h-5 w-5 text-primary font-bold" />
        </div>
      )}
    </div>
  );
};

export default ChatItem;
