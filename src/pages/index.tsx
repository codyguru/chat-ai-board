import React, { useEffect, useState, useRef, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FOOTER, HEADER } from 'constants/config.ts';
import { useGetAnswersMutation } from 'libs/mutations/useGetAnswersMutation.ts';
import Footer from 'sections/footer';
import { AiAnswers, Questions } from 'sections/chats';
import { IChatHistory } from 'types/chats.ts';

const IndexPage: React.FC = () => {
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const [chatHistory, setChatHistory] = useState<IChatHistory[]>([]);
  const { mutateAsync: getAnswers } = useGetAnswersMutation();

  useEffect(() => {
    const element = chatBoxRef.current;
    if (element) {
      element.scrollTo({
        top: element.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory, chatBoxRef]);

  const renderChatBox = useMemo(
    () => (
      <div
        ref={chatBoxRef}
        className="overflow-y-auto px-6 py-6 md:px-9 md:py-12"
        style={{ height: `calc(100vh - ${HEADER.H_MAIN_DESKTOP + FOOTER.H_MAIN_DESKTOP}px)` }}
      >
        <div className="max-w-2xl mx-auto">
          {chatHistory.length &&
            chatHistory.map((history) => (
              <div key={history.id} className="flex flex-col">
                {history.questions && <Questions questions={history.questions} />}
                {history.answers && <AiAnswers answers={history.answers} />}
              </div>
            ))}
        </div>
      </div>
    ),
    [chatHistory]
  );

  const handleSendMessage = async (message: string) => {
    const draftChatHistory = [...chatHistory];
    const uuid = uuidv4();
    draftChatHistory.push({
      id: uuid,
      questions: message,
      answers: '',
    });
    setChatHistory(draftChatHistory);
    const { data } = await getAnswers({
      id: uuid,
      message,
    });
    draftChatHistory[draftChatHistory.length - 1].answers = data.answers;
    setChatHistory([...draftChatHistory]);
  };

  return (
    <div className="flex flex-col w-full">
      {renderChatBox}
      <Footer onSendMessage={handleSendMessage} />
    </div>
  );
};

export default IndexPage;
