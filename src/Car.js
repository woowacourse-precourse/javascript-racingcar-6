import { Console, Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.location = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      location += 1;
    }
  }
}

class SettingCars {
  async registerCars() {
    const carNameList = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    const carNameArray = carNameList.split(',');
    const registeredCars = carNameArray.map((carName) => new Car(carName));
    return registeredCars;
  }
}

export default SettingCars;
