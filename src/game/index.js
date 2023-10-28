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

  checkForwardCondition(number, { min, max }) {
    return number >= min && number <= max;
  },

  runRacingTurn(racingStatus) {
    if (!Array.isArray(racingStatus)) {
      throw new Error('[ERROR] 인자는 각 자동차의 상태가 담긴 배열입니다');
    }

    return racingStatus.map((car) => {
      const randomNumber = this.getRandomNumber(
        VALIDATION_CONDITION.randomNumberRange,
      );

      if (
        this.checkForwardCondition(
          randomNumber,
          VALIDATION_CONDITION.forwardNumberRange,
        )
      ) {
        return {
          ...car,
          forwardCount: car.forwardCount + 1,
        };
      }
      return car;
    });
  },
};
export default racingCarGame;
