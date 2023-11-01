import MESSAGE from '../common/message.js';

const validateAttemptCount = (attemptCount) => {
  const integerPattern = /^-?\d+$/;
  const result = integerPattern.test(attemptCount);

  if (result === false) {
    throw new Error(MESSAGE.errorNumber);
  }

  const parsedAttemptCount = parseFloat(attemptCount);

  if (parsedAttemptCount < 0) {
    throw new Error(MESSAGE.errorNumber);
  }

  return parsedAttemptCount;
};

export default validateAttemptCount;
