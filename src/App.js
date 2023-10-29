  import { Console, Random } from '@woowacourse/mission-utils';
  import Car from './Car.js';

  class App {
    constructor() {
      this.CARS_ARRAY = [];
      this.TEMP_CARS_ARRAY = [];
      this.GAME_COUNT = 0;
    }

    #checkArrayOfCars() {
      if (new Set(this.TEMP_CARS_ARRAY).size !== this.TEMP_CARS_ARRAY.length) {
        Console.print('중복 발생');
        throw new Error('[Error]: 자동차 이름이 중복됩니다.');
      }

      this.TEMP_CARS_ARRAY.forEach((element) => {
        if (element.includes(' ') || element.length === 0 || element.length > 5) {
          Console.print('올바르지 않은 입력');
          throw new Error('[Error]: 자동차 이름이 중복되거나 올바르지 않습니다.');
        }
      });

      return true;
    }

    #makeArrayOfCars(carInput) {
      this.TMP_CARS = carInput.split(',');

      this.TMP_CARS.forEach((element) => {
        this.CARS_ARRAY.push(new Car(element, 0));
      });

      try {
        if (this.#checkArrayOfCars(this.TMP_CARS)) {
          Console.print('올바른 입력');
          Console.print(this.CARS_ARRAY);
        }
      } catch (e) {
        Console.print(e);
      }
    }

    async #getInputCars() {
      const CAR_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      this.#makeArrayOfCars(CAR_INPUT);
    }

    async #getInputGameCount() {
      this.GAME_COUNT = await Console.readLineAsync(
        '시도할 횟수는 몇 회인가요?\n'
      );
    }

    async play() {
      await this.#getInputCars();
      await this.#getInputGameCount();
    }
  }

  export default App;
