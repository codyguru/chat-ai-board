import React, { useState } from 'react';
import Footer from 'sections/footer';
import { FOOTER, HEADER } from 'constants/config.ts';
import { useGetAnswersMutation } from 'libs/mutations/useGetAnswersMutation.ts';
import { AiAnswers, Questions } from 'sections/chats';

const IndexPage: React.FC = () => {
  const [answers, setAnswers] = useState<string>('');
  const [questions, setQuestions] = useState<string>('');
  const { mutateAsync: getAnswers } = useGetAnswersMutation();

  const handleSendMessage = async (message: string) => {
    setQuestions(message);
    const { data } = await getAnswers(message);
    setAnswers(data.answers);
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className="overflow-y-auto px-6 py-6 md:px-9 md:py-12"
        style={{ height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP + FOOTER.H_MAIN_DESKTOP}px)` }}
      >
        <div className="max-w-2xl mx-auto">
          {!!answers && <AiAnswers answers={answers} />}
          {!!questions && <Questions questions={questions} />}
        </div>
      </div>
      <Footer onSendMessage={handleSendMessage} />
    </div>
  );
};

export default IndexPage;
