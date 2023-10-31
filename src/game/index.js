import REGEX from '../../constants/regex.constant';
import printMsg from '../../utils/printMsg';
import prompt from '../../utils/prompt';
import racingGameValidationMethods from './game.error';
import MESSAGE from './game.message';
import PROMPT_PHASE from './game.promptPhase';
import gameUtils from './game.utils';
import VALIDATION_CONDITION from './game.validation';

class RacingCarGame {
  async promptToRacingObject() {
    const carNameArray = (await prompt(PROMPT_PHASE.carName))
      .replace(REGEX.space, '')
      .split(',');
    racingGameValidationMethods.validateCarNames(carNameArray);

    const moveCount = await prompt(PROMPT_PHASE.moveCount);
    racingGameValidationMethods.validateMoveCount(moveCount);

    return { carNameArray, moveCount: Number(moveCount) };
  }

  makeCarsWithForwardCount(carNameArray) {
    if (!Array.isArray(carNameArray)) {
      throw new Error('[ERROR] 인자는 배열이여야 합니다.');
    }
    return carNameArray.map((name) => ({ name, forwardCount: 0 }));
  }

  checkForwardCondition(number) {
    return (
      number >= VALIDATION_CONDITION.randomNumberRange.min &&
      number <= VALIDATION_CONDITION.randomNumberRange.max
    );
  }

  checkIncreaseForwardCountRandomly() {
    const randomNumber = gameUtils.getRandomNumber();
    const isForward = this.checkForwardCondition(randomNumber);
    return isForward;
  }

  printRacingTurn(carStatusArray) {
    let racingTurnResult = '';
    carStatusArray.forEach(({ name, forwardCount }) => {
      racingTurnResult += `${name} : ${gameUtils.getNumberToDash(
        forwardCount,
      )}\n`;
    });
    printMsg(racingTurnResult);
  }

  updateCarStatusForCondition(carStatusArray) {
    const afterCarStatusArray = [...carStatusArray];

    carStatusArray.forEach((_, index) => {
      if (this.checkIncreaseForwardCountRandomly()) {
        afterCarStatusArray[index].forwardCount += 1;
      }
    });
    return afterCarStatusArray;
  }

  getWinner(carStatusArray) {
    const winnerArray = [];

    // forwardCount 기준 내림차순 정렬
    carStatusArray.sort((a, b) => b.forwardCount - a.forwardCount);
    const maxCount = carStatusArray[0].forwardCount;

    carStatusArray.forEach((car) => {
      if (car.forwardCount === maxCount) winnerArray.push(car.name);
    });
    return winnerArray;
  }

  printWinner(carStatusArray) {
    printMsg(`${MESSAGE.result} ${this.getWinner(carStatusArray).join(', ')}`);
  }
}
export default RacingCarGame;
