import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const names = await this.getCarNames();
    const count = await this.getPlayCount();
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNames = carNamesInput
      .split(',')
      .map(item => item.trim());

    if (carNames.some(name => name.length > 5)) {
      throw new Error('이름은 5글자 이하로만 입력할 수 있습니다.');
    }

    return carNames;
  } 
  
  async getPlayCount() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const count = parseInt(input, 10);

    this.validatePlayCount(count);

    return count;
  }

  validatePlayCount(count) {
    if (isNaN(count)) {
      throw new Error('[ERROR] 값이 잘 못 입력되었습니다.');
    }
  }
}

export default App;
