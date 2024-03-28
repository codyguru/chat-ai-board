import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as _ from 'lodash';

const mock = new MockAdapter(axios, { delayResponse: _.random(250, 500) });
export default mock;
