import { Console, MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE, ERROR_MESSAGE } from './Message.js';

class App {
  async play() {
    const names = await this.getCarNames();
    const count = await this.getPlayCount();
    const carInfo = Object.fromEntries(names.map(name => [name, 0]));

    Console.print(MESSAGE.RESULT);
    for (let i = 0; i < count; i++) {
      this.playRound(carInfo);
    }
  
    this.printResults(carInfo);
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(MESSAGE.GETCARNAMES);
    const carNames = carNamesInput
      .split(',')
      .map(item => item.trim());

    this.validateCarNames(carNames);

    return carNames;
  }

  async getPlayCount() {
    const input = await Console.readLineAsync(MESSAGE.GETPLAYCOUNT);
    const count = parseInt(input, 10);

    this.validatePlayCount(count);

    return count;
  }

  validateCarNames(carNames) {
    const filteredNames = carNames.filter(name => name.trim() !== '');
    if (filteredNames.length == 0) {
      throw new Error(ERROR_MESSAGE.NOCARNAMES_ERROR);
    }

    if (filteredNames.some(name => name.length > 5)) {
      throw new Error(ERROR_MESSAGE.VALIDATECARNAME_ERROR);
    }
  }

  validatePlayCount(count) {
    if (isNaN(count)) {
      throw new Error(ERROR_MESSAGE.VALIDATEPLAYCOUNT_ERROR);
    }
  }

  playRound(carInfo) {
    Object.entries(carInfo).forEach(([name, number]) => {
      const randomNumber = this.randomIndex();
      const updatedNumber = number + randomNumber;
      carInfo[name] = updatedNumber;
  
      const dashes = '-'.repeat(updatedNumber);
      Console.print(`${name} : ${dashes}`);
    });
     
    Console.print('');
  }

  printResults(carInfo) {
    const winners = this.findWinners(carInfo);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  randomIndex() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? 1 : 0;
  }

  findWinners(carInfo) {
    const highestScore = Math.max(...Object.values(carInfo));
    const winners = Object.keys(carInfo)
      .filter(name => carInfo[name] == highestScore);

    return winners;
  }
}

export default App;
