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
function checkName(str) {
  const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z\,]/g;
  if (regExp.test(str) && str.search(/\s/) === -1) {
    return true;
  } else {
    return false;
  }
}

class App {
  async getCarName() {
    let input = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    // 1. 아무것도 입력하지 않았을 경우
    if (input === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
    let nameList = input.split(',');
    // 5. 같은 이름를 입력한 경우
    if (new Set(nameList).size !== nameList.length) {
      throw new Error('[ERROR] 같은 이름이 입력되었습니다');
    }
    console.log(nameList);
    let carArray = [];
    nameList.forEach((carName) => {
      // 2. 이름으로 문자열을 입력하지 않은 경우 && 6.쉼표가 연속으로 사용된경우
      if (!checkName(carName)) {
        throw new Error('[ERROR] 입력값이 문자가 아닙니다.');
      }
      // 3. 1대의 자동차 이름만 입력한경우
      if (nameList.length === 1) {
        throw new Error('[ERROR] 한대의 자동차만 입력되었습니다.');
      }
      // 4. 이름이 5자 이하가 아닌경우
      if (carName.length > 5) {
        throw new Error('[ERROR] 자동차의 이름이 5자 이상입니다');
      }
      let car = new Car(carName);
      carArray.push(car);
    });

    return carArray;
  }

  async getGameCount() {
    let gameCount = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    // 1. 아무것도 입력하지 않았을 경우
    if (gameCount === '') {
      throw new Error('[ERROR] 입력값이 없습니다.');
    }
    // 2. 숫자가 아닌 값을 입력한 경우
    if (Number.isNaN(Number(gameCount)) || gameCount.search(/\s/) !== -1) {
      throw new Error('[ERROR] 숫자를 입력해야 합니다.');
    }
    // 3. 0을 입력한 경우
    if (Number(gameCount) < 1) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력해야 합니다.');
    }

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
// const app = new App();
// await app.play();
export default App;
