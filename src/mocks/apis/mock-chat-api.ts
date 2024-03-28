import * as _ from 'lodash';
import mock from '../mock';
import { paragraph } from 'txtgen';

mock.onPost('/api/generate-answers').reply((config) => {
  const requestBody = JSON.parse(config.data);
  const uuid = requestBody.id;
  const randomAnswer = paragraph(_.random(2, 5));

  return [
    200,
    {
      id: uuid,
      answers: randomAnswer,
    },
  ];
});
