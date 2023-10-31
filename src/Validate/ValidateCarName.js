import RACING_CAR_GAME from '../Constant/Constant.js';

const ValidateExceptions = (user) => {
  if (user.length < 2) {
    throw RACING_CAR_GAME.ERROR.CAR_SPECIES;
  }

  for (const CAR of user) {
    if (CAR.length > 5) {
      throw RACING_CAR_GAME.ERROR.CAR_NAME_LENGTH;
    }
    if (CAR.length === 0) {
      throw RACING_CAR_GAME.ERROR.CAR_NAME_SPACE;
    }
  }
};

export default ValidateExceptions;
