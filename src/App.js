import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }
  goForward() {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (number > 3) {
      this.distance += '-';
    }
    MissionUtils.Console.print(`${this.name} : ${this.distance}`);
  }
}
// class StartGame {

//   async getCarName() {
//     let input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
//     let nameList = input.split(',');
//     let carArray = [];
//     nameList.forEach((carName) => {
//       let car = new Car(carName);
//       carArray.push(car);
//     });
//     return carArray;
//   }
//   async getGameCount() {
//     let gameCount = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
//     return gameCount;
//   }
// }

class App {
  async getCarName() {
    let input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    let nameList = input.split(',');
    let carArray = [];
    nameList.forEach((carName) => {
      let car = new Car(carName);
      carArray.push(car);
    });
    return carArray;
  }

  async getGameCount() {
    let gameCount = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return gameCount;
  }
  gameTrial(carArray, gameCount) {
    MissionUtils.Console.print('실행결과');
    for (let i = 0; i < gameCount; i++) {
      carArray.forEach((car) => {
        car.goForward();
      });
      MissionUtils.Console.print('\n');
    }
  }
  async play() {
    let carArray = await this.getCarName();
    let gameCount = await this.getGameCount();
    console.log(carArray, gameCount);
    this.gameTrial(carArray, gameCount);
  }
}
const app = new App();
await app.play();
export default App;
