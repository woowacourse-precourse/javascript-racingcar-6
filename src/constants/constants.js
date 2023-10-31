export const VALIDATION = Object.freeze({
  carName: {
    minLength: 1,
    maxLength: 5,
  },

  carMoveCondition: {
    minNumber: 0,
    maxNumber: 9,
    triggerNumber: 4,
  },
});

export const REG_EXP = Object.freeze({
  carName: new RegExp(
    `^\\S{${VALIDATION.carName.minLength},${VALIDATION.carName.maxLength}}$`,
  ),
  round: /^\d+$/,
});

export const GAME = Object.freeze({
  splitDelimiter: ',',
  joinDelimiter: ', ',
});
