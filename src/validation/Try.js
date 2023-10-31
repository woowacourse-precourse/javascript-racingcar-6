import Messages from '../messages/Try.js';

const tryValidate = (tryCount) => {
  if (Number.isNaN(Number(tryCount))) {
    throw new Error(Messages.ERROR_INPUT_TRY);
  }
  if (tryCount.trim() === '') {
    throw new Error(Messages.ERROR_INPUT_TRY);
  }

  const tryCountNumber = Number(tryCount);
  if (tryCountNumber === 0) {
    throw new Error(Messages.ERROR_INPUT_TRY);
  }

  if (tryCountNumber < 0) {
    throw new Error(Messages.ERROR_INPUT_TRY);
  }

  if (tryCountNumber % 1 !== 0) {
    throw new Error(Messages.ERROR_INPUT_TRY);
  }
};

export default tryValidate;
