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
    // 1. 아무것도 입력하지 않았을 경우
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
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
  async printWinner(carArray) {
    let distanceArray = [];
    carArray.forEach((car) => {
      distanceArray.push(car.distance.length);
    });
    let maxDistance = Math.max(...distanceArray);
    let winnerCarArray = carArray.filter((car) => car.distance.length === maxDistance);
    let winnerCar = '';
    for (let i = 0; i < winnerCarArray.length; i++) {
      winnerCar += winnerCarArray[i].name;
      if (i !== winnerCarArray.length - 1) {
        winnerCar += ', ';
      }
    }
    MissionUtils.Console.print(`최종 우승자 : ${winnerCar}`);
  }
  async play() {
    let carArray = await this.getCarName();
    let gameCount = await this.getGameCount();

    this.gameTrial(carArray, gameCount);
    this.printWinner(carArray);
  }
}
const app = new App();
await app.play();
export default App;
