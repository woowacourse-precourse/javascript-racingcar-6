import MESSAGES from '../constants/messages.js';

const throwError = (message) => {
  throw new Error(`${MESSAGES.ERROR} ${message}`);
};

export default throwError;
