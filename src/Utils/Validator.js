import {
  isEmpty,
  validateCarName,
  validateGameRound,
} from '../Errors/InputErrors';

const validatorCarName = (carName) => {
  const CarNameErrors = [isEmpty, validateCarName];
  let error = null;

  CarNameErrors.some((validator) => {
    error = validator(carName);
    return error !== null;
  });
  if (error !== null) {
    throw new Error(error);
  }
};

const validatorGameRound = (gameRound) => {
  const GameRoundErrors = [validateGameRound, isEmpty];
  let error = null;

  GameRoundErrors.some((validator) => {
    error = validator(gameRound);
    return error !== null;
  });
  if (error !== null) {
    throw new Error(error);
  }
};

export { validatorCarName, validatorGameRound };
