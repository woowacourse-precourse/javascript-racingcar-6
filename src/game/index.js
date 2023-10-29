import REGEX from '../../constants/regex.constant';
import printMsg from '../../utils/printMsg';
import prompt from '../../utils/prompt';
import racingGameValidationMethods from './game.error';
import MESSAGE from './game.message';
import PROMPT_PHASE from './game.promptPhase';
import gameUtils from './game.utils';
import VALIDATION_CONDITION from './game.validation';

const racingCarGame = {
  async promptToRacingObject() {
    const carNameArray = (await prompt(PROMPT_PHASE.carName))
      .replace(REGEX.space, '')
      .split(',');
    racingGameValidationMethods.carsName(carNameArray);

    const moveCount = await prompt(PROMPT_PHASE.moveCount);
    racingGameValidationMethods.moveCount(moveCount);

    return { carNameArray, moveCount: Number(moveCount) };
  },

  makeCarsWithForwardCount(carsNameArray) {
    if (!Array.isArray(carsNameArray)) {
      throw new Error('[ERROR] 인자는 배열이여야 합니다.');
    }
    return carsNameArray.map((name) => ({ name, forwardCount: 0 }));
  },

  checkForwardCondition(number, { min, max }) {
    return number >= min && number <= max;
  },

  increaseForwardCountRandomly(racingStatus) {
    if (!Array.isArray(racingStatus)) {
      throw new Error('[ERROR] 인자는 각 자동차의 상태가 담긴 배열입니다');
    }

    return racingStatus.map((car) => {
      const randomNumber = gameUtils.getRandomNumber(
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

  printRacingTurn(racingStatus) {
    let racingTurnResult = '';
    racingStatus.forEach(({ name, forwardCount }) => {
      racingTurnResult += `${name} : ${gameUtils.getNumberToDash(
        forwardCount,
      )}\n`;
    });
    printMsg(racingTurnResult);
  },

  runRacingTurn(racingStatus) {
    const turnResultStatus = this.increaseForwardCountRandomly(racingStatus);
    this.printRacingTurn(turnResultStatus);

    return turnResultStatus;
  },

  getWinner(racingStatus) {
    const winnerArray = [];

    // forwardCount 기준 내림차순 정렬
    racingStatus.sort((a, b) => b.forwardCount - a.forwardCount);
    const maxCount = racingStatus[0].forwardCount;

    racingStatus.forEach((car) => {
      if (car.forwardCount === maxCount) winnerArray.push(car.name);
    });
    return winnerArray;
  },

  printWinner(racingStatus) {
    printMsg(`${MESSAGE.result} ${this.getWinner(racingStatus).join(', ')}`);
  },
};
export default racingCarGame;
