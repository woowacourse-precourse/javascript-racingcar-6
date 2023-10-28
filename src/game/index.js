import prompt from '../../utils/prompt';
import stringToArray from '../../utils/stringToArray';
import validations from './game.error';
import PROMPT_PHASE from './game.promptPhase';

const racingCarGame = {
  async promptToRacingObject() {
    const carName = await prompt(PROMPT_PHASE.carName);
    const carNameArray = stringToArray(carName.replace(' ', ''), ',');
    validations.carsName(carNameArray);

    const moveCount = await prompt(PROMPT_PHASE.moveCount);
    validations.moveCount(moveCount);

    return { carNameArray, moveCount: Number(moveCount) };
  },

  makeCarsWithForwardCount(carsNameArray) {
    if (!Array.isArray(carsNameArray)) {
      throw new Error('[ERROR] 인자는 배열이여야 합니다.');
    }
    return carsNameArray.map((name) => ({ name, forwardCount: 0 }));
  },

  getRandomNumber({ min, max }) {
    return MissionUtils.Random.pickNumberInRange(min, max);
  },
};
export default racingCarGame;
