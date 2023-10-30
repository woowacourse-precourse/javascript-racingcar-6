import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.startMessage =
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';
    this.countMessage = '시도할 횟수는 몇 회인가요?\n';
  }

  async play() {
    const userCar = await MissionUtils.Console.readLineAsync(this.startMessage);
    const userCount = await MissionUtils.Console.readLineAsync(
      this.countMessage,
    );
    if (!App.isValidCar(userCar)) {
      throw new Error('[ERROR] 자동차 이름을 잘못 입력했습니다.');
    }
    if (!App.isValidNumber(userCount)) {
      throw new Error('[ERROR] 시도 횟수를 잘못 입력했습니다.');
    }
  }

  static isValidCar(userCar) {
    const carNames = userCar.split(',');
    console.log(carNames);
    if (carNames.every(name => name.length > 5)) return false;
    if (carNames.some(name => name.trim().length === 0)) return false;
    return true;
  }

  static isValidNumber(userCount) {
    if (Number.isNaN(Number(userCount))) return false;
    if (userCount > 9 || userCount < 0) return false;
    return true;
  }
}

export default App;
