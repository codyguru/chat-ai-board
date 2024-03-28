import axiosInstance from 'utils/axios.ts';

export const getAnswersApi = (message: string) =>
  axiosInstance.post('/api/generate-answers', {
    question: message,
  });
