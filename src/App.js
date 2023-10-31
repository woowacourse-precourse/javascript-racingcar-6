import { Console, Random } from '@woowacourse/mission-utils';
import MESSAGE from './Constant.js';
import { checkCarNameDuplicate, checkCarNameLength } from './Validate.js';
import Car from './Car.js';
class App {
  constructor() {
    this.cars = [];
  }
  initCarList(carNameArray) {
    carNameArray.forEach((carName) => {
      this.cars.push(new Car(carName));
    });
  }

  async getCarName() {
    const inputCarName = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    const carNameArray = inputCarName.split(',');
    if (
      !checkCarNameDuplicate(carNameArray) ||
      !checkCarNameLength(carNameArray)
    )
      throw new Error('[ERROR] 자동차 이름을 다시 확인해주세요');
    this.initCarList(carNameArray);
  }

  async getRaceNumber() {
    const inputRaceNumber = await Console.readLineAsync(
      MESSAGE.INPUT_RACE_NUMBER
    );
    // if (!checkInputRaceNumber)
    //   throw new Error('[ERROR] 올바른 게임 횟수를 입력해주세요');
    return inputRaceNumber;
  }

  makeCarMove() {
    this.cars.forEach((car) => {
      const randomNumber = this.pickRandomNumber();
      if (randomNumber >= 4) {
        car.advance();
      }
    });
  }
  pickRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  async play() {
    await this.getCarName();
    const raceNumber = await this.getRaceNumber();
    console.log(this.cars);
  }
}

export default App;
