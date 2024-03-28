import mock from '../mock';
import { paragraph } from 'txtgen';

mock.onPost('/api/generate-answers').reply((req) => {
  const randomAnswer = paragraph(2);

  return [200, { answers: randomAnswer }];
});
