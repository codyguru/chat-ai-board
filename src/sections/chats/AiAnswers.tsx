import React from 'react';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export interface IAiAnswersProps {
  answers: string;
}

const AiAnswers: React.FC<IAiAnswersProps> = ({ answers }) => {
  return (
    <div className="w-full flex flex-col gap-4 bg-grey-800 border-2 border-grey-700 p-3 md:p-5 rounded-secondary">
      <div className="flex flex-row items-center gap-3">
        <div className="bg-base-gradient rounded-full shadow-rounded p-1">
          <ChatBubbleLeftRightIcon className="w-4 h-4 text-white" />
        </div>
        <p className="text-primary font-bold">Hospitelligence.ai</p>
      </div>
      <p className="text-secondary text-sm">{answers}</p>
    </div>
  );
};

export default AiAnswers;
