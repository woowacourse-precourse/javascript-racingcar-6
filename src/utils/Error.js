import { BLANK, ERROR_MESSAGE_HEADER } from '../constants/index.js';

const throwError = (message) => {
  throw new Error(`${ERROR_MESSAGE_HEADER}${BLANK}${message}`);
};

export { throwError };
