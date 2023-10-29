import RACING_CAR_GAME from '../Constant/Constant.js';

const ValidateExceptions = (user) => {
  if (user.length < 2) {
    throw RACING_CAR_GAME.ERROR.CAR_SPECIES;
  }
  user.forEach((element) => {
    if (element.length > 5) {
      throw RACING_CAR_GAME.ERROR.CAR_NAME_LENGTH;
    }
    if (element.length === 0) {
      throw RACING_CAR_GAME.ERROR.CAR_NAME_SPACE;
    }
  });
};

export default ValidateExceptions;
