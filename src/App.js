import { Console, Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  async play() {
    // function chkInput(carInput, countInput) {
    //   const TMP_CARS = carInput.split(',');

    //   if(new Set(carInput).size === TMP_CARS.length) {
    //     //입력 받은 자동차 목록에 중복이 없는가?
    //     if(isNaN(countInput)) {
    //       //경주 할 횟수가 숫자인가?

    //       }
    //     }

    //   }

    const CARS_ARRAY = [];

    function makeArrayOfCars(carInput) {
      const TMP_CARS = carInput.split(',');

      TMP_CARS.forEach((element) => {
        CARS_ARRAY.push(new Car(element, 0));
      });
      Console.print(CARS_ARRAY);
      return CARS_ARRAY;
    }

    async function getInputCars() {
      const CAR_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      makeArrayOfCars(CAR_INPUT);
    }

    // async function getInput() {
    //   const COUNT_INPUT =
    //     await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    //   // chkInput을 통과할 경우 객체에 담는다.
    //   if (chkInput(CAR_INPUT, COUNT_INPUT)) {
    //     const CARS = CAR_INPUT.split(',');
    //     makeCarList(CARS, COUNT_INPUT);
    //   }
    // }

    getInputCars();
  }
}

export default App;
