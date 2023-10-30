import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async getCarName() {
    const input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const car_name = input.split(',');
    if(
      input === null 
      || input.match(/D/) 
    ) {
      throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
    }

    car_name.forEach((e) => {
      if(e.length > 5) throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
    })

    return car_name;
  }

  async getNum() {
    const num = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    if(
      num === null 
      || num.match(/\D/) 
      || num === 0
    ) {
      throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    return num;
  }

  async play() {
    const car = await this.getCarName();
    const num = await this.getNum();
    MissionUtils.Console.print(car);
    
  }
}

export default App;
