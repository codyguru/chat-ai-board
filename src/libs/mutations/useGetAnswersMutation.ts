import { useMutation } from '@tanstack/react-query';
import { getAnswersApi } from '../apis/chat-api.ts';

export const useGetAnswersMutation = () =>
  useMutation({
    mutationKey: ['GET_ANSWERS_FROM_AI'],
    mutationFn: getAnswersApi,
  });
