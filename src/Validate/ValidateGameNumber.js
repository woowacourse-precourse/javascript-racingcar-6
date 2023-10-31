import RACING_CAR_GAME from '../Constant/Constant.js';

const ValidateGameNumber = (gameNumber) => {
  if (gameNumber <= 0 || !/^\d+$/.test(gameNumber)) {
    throw RACING_CAR_GAME.ERROR.GAME_NUMBER;
  }
};

export default ValidateGameNumber;
