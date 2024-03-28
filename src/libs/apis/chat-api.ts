import axiosInstance from 'utils/axios.ts';

export const getAnswersApi = ({ id, message }: { id: string; message: string }) =>
  axiosInstance.post('/api/generate-answers', {
    id,
    question: message,
  });
