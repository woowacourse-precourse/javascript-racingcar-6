import RacingCarError from '../error/RacingCarError';

export const trialCountValidation = trialCount => {
  Object.values(trialCountValidation.validation).forEach(
    ({ errorMessage, isInvalid }) => {
      if (isInvalid(trialCount)) throw new RacingCarError(errorMessage);
    },
  );
};
trialCountValidation.validation = Object.freeze({
  typeOfNumber: Object.freeze({
    errorMessage: '숫자타입이 아닙니다.',
    isInvalid(trialCount) {
      const regExp = /^[1-9]\d*$/;
      return !regExp.test(trialCount);
    },
  }),
});

export default trialCountValidation;
