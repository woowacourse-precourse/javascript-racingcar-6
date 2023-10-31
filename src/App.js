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

  printResult(cars) {
    cars.forEach((car) => {
      MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.count)}`);
    })
    MissionUtils.Console.print('');
  }

  playGame(car_name, num) {
    let cars = [];
    car_name.forEach((elem) => {
      let car = {};
      car.name = elem;
      car.count = 0;
      cars.push(car);
    });

    MissionUtils.Console.print('실행 결과');
    while(num > 0) {
      cars.forEach((car) => {
        const random_num = MissionUtils.Random.pickNumberInRange(0, 9);
        if(random_num >= 4) {
          car.count += 1;
        }
      })

      this.printResult(cars);
      
      num -= 1;
    }
    
    //우승자 출력
  }

  async play() {
    const car_name = await this.getCarName();
    const num = await this.getNum();
    
    await this.playGame(car_name, num);
  }
}

export default App;
