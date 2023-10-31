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
    racingGameValidationMethods.validateCarNames(carNameArray);

    const moveCount = await prompt(PROMPT_PHASE.moveCount);
    racingGameValidationMethods.validateMoveCount(moveCount);

    return { carNameArray, moveCount: Number(moveCount) };
  },

  makeCarsWithForwardCount(carNameArray) {
    if (!Array.isArray(carNameArray)) {
      throw new Error('[ERROR] 인자는 배열이여야 합니다.');
    }
    return carNameArray.map((name) => ({ name, forwardCount: 0 }));
  },

  checkForwardCondition(number, { min, max }) {
    return number >= min && number <= max;
  },

  increaseForwardCountRandomly(carStatusArray) {
    if (!Array.isArray(carStatusArray)) {
      throw new Error('[ERROR] 인자는 각 자동차의 상태가 담긴 배열입니다');
    }

    return carStatusArray.map((car) => {
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

  printRacingTurn(carStatusArray) {
    let racingTurnResult = '';
    carStatusArray.forEach(({ name, forwardCount }) => {
      racingTurnResult += `${name} : ${gameUtils.getNumberToDash(
        forwardCount,
      )}\n`;
    });
    printMsg(racingTurnResult);
  },

  runRacingTurn(carStatusArray) {
    const turnResultStatus = this.increaseForwardCountRandomly(carStatusArray);
    this.printRacingTurn(turnResultStatus);

    return turnResultStatus;
  },

  getWinner(carStatusArray) {
    const winnerArray = [];

    // forwardCount 기준 내림차순 정렬
    carStatusArray.sort((a, b) => b.forwardCount - a.forwardCount);
    const maxCount = carStatusArray[0].forwardCount;

    carStatusArray.forEach((car) => {
      if (car.forwardCount === maxCount) winnerArray.push(car.name);
    });
    return winnerArray;
  },

  printWinner(carStatusArray) {
    printMsg(`${MESSAGE.result} ${this.getWinner(carStatusArray).join(', ')}`);
  },
};
export default racingCarGame;
