import React from 'react';
import AvatarPng from 'assets/images/avatar.png';

export interface IQuestionsProps {
  questions: string;
}

const Questions: React.FC<IQuestionsProps> = ({ questions }) => {
  return (
    <div className="w-full flex flex-col gap-4 p-3 md:p-5">
      <div className="flex flex-row items-center gap-3">
        <div className="rounded-full">
          <img src={AvatarPng} alt="" className="w-6 h-6 rounded-full" />
        </div>
        <p className="text-primary font-bold">Jacob Jones</p>
      </div>
      <p className="text-secondary text-sm">{questions}</p>
    </div>
  );
};

export default Questions;
