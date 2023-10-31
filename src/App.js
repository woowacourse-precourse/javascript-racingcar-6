import { Console, Random } from '@woowacourse/mission-utils';
import { GAME_MESSAGE, ERROR_MESSAGE, CONSTANT } from './Message';

class App {
  constructor() {
    this.countRepeat = 0;
    this.raceResult = [];
  }

  getCarNamesArray(carNames) {
    // test code 완료
    return carNames.split(',');
  }

  checkCarNames(element) {
    // test code 완료
    if (element.length > CONSTANT.NAME_LENGTH_LIMIT)
      throw new Error(ERROR_MESSAGE.LENGTH);
  }

  checkRepeatNumber(repeatNumber) {
    // test code 완료
    if (repeatNumber.includes(' ')) throw new Error(ERROR_MESSAGE.GAP);
    if (isNaN(repeatNumber)) throw new Error(ERROR_MESSAGE.NUMBER);
  }

  makeObject(carName) {
    // test code 완료
    const carObject = {
      name: carName,
      result: '',
    };
    return carObject;
  }

  makeRandomNumber(raceResult) {
    raceResult.forEach((element) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      element = this.goForward(element, randomNumber);
    });
    return raceResult;
  }

  goForward(element, randomNumber) {
    if (randomNumber >= CONSTANT.GOFORWARD_NUMBER) {
      element.result = element.result.concat('-');
    }
  }

  printResult(raceResult) {
    // test code 완료
    raceResult.forEach((e) => {
      Console.print(GAME_MESSAGE.RESULT(e));
    });
    Console.print('\n');
  }

  findLength(raceResult) {
    // test code 완료
    const lengthArray = [];
    raceResult.forEach((element) => {
      lengthArray.push(element.result.length);
    });
    return lengthArray;
  }

  getWinnerIndex(element, index, maxLength, winnerIndex) {
    // test code 완료
    if (maxLength === element.result.length) {
      winnerIndex.push(index);
    }
    return winnerIndex;
  }

  makeWinnerIndexArray(raceResult, maxLength) {
    // test code 완료
    let winnerIndex = [];
    raceResult.forEach((element, index) => {
      winnerIndex = this.getWinnerIndex(element, index, maxLength, winnerIndex);
    });
    return winnerIndex;
  }

  findMaxLength(lengthArray) {
    // test code 완료
    return Math.max(...lengthArray);
  }

  pushWinnerName(element, index, winnerIndexArray, winnerName) {
    // test code 완료
    if (winnerIndexArray.includes(index)) {
      winnerName.push(element.name);
    }
    return winnerName;
  }

  makeWinnerArray(raceResult, winnerIndexArray) {
    // test code 완료
    let winnerName = [];
    raceResult.forEach((element, index) => {
      winnerName = this.pushWinnerName(
        element,
        index,
        winnerIndexArray,
        winnerName
      );
    });
    return winnerName;
  }

  checkWinner(raceResult) {
    /* 한 자동차당 전진한 수를 구하는 함수 */
    const lengthArray = this.findLength(raceResult);
    const maxLength = this.findMaxLength(lengthArray);
    const winnerIndexArray = this.makeWinnerIndexArray(raceResult, maxLength);
    const winnerArray = this.makeWinnerArray(raceResult, winnerIndexArray);
    return winnerArray;
  }

  printWinner(winnerName) {
    // test code 완료
    const winnerNameString = winnerName.join(', ');
    Console.print(GAME_MESSAGE.WINNER(winnerNameString));
  }

  async play() {
    const carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CARNAMES);
    const carNamesArray = this.getCarNamesArray(carNames);
    carNamesArray.forEach((element) => {
      this.checkCarNames(element);
    });

    const repeatNumber = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_TRYNUMBER
    );
    this.checkRepeatNumber(repeatNumber);

    carNamesArray.forEach((element) => {
      this.raceResult.push(this.makeObject(element));
    });

    while (this.countRepeat < repeatNumber) {
      this.raceResult = this.makeRandomNumber(this.raceResult);
      this.printResult(this.raceResult);
      this.countRepeat++;
    }

    const winnerName = this.checkWinner(this.raceResult);
    this.printWinner(winnerName);
  }
}

export default App;
