import { MissionUtils } from '@woowacourse/mission-utils';
import printMsg from '../../utils/printMsg';
import prompt from '../../utils/prompt';
import validations from './game.error';
import PROMPT_PHASE from './game.promptPhase';
import VALIDATION_CONDITION from './game.validation';

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

  increaseForwardCountRandomly(racingStatus) {
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

  getNumberToDash(repeatNumber) {
    if (Number.isNaN(Number(repeatNumber))) {
      throw new Error('[ERROR] 인자는 숫자여야 합니다');
    }

    if (repeatNumber <= 0) return '';

    return '-'.repeat(repeatNumber);
  },

  printRacingTurn(racingStatus) {
    let racingTurnResult = '';
    racingStatus.forEach(({ name, forwardCount }) => {
      racingTurnResult += `${name} : ${this.getNumberToDash(forwardCount)}\n`;
    });
    printMsg(racingTurnResult);
  },

  runRacingTurn(racingStatus) {
    const turnResultStatus = this.increaseForwardCountRandomly(racingStatus);
    this.printRacingTurn(turnResultStatus);

    return turnResultStatus;
  },
};
export default racingCarGame;
