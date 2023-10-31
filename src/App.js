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

  async play() {
    await this.getCarName();
    console.log(this.cars);
  }
}

export default App;
