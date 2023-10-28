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

    function checkArrayOfCars(carsArray) {
      const TMP_CAR_FOR_CHECK = carsArray;

      if (new Set(TMP_CAR_FOR_CHECK).size !== TMP_CAR_FOR_CHECK.length) {
        // set과 배열의 길이가 다를 경우 중복이 제거된 것이므로 중복 발생.
        Console.print('중복 발생');
        throw new Error('[Error]: 자동차 이름이 중복됩니다.');
      }

      TMP_CAR_FOR_CHECK.forEach((element) => {
        if (
          element.includes(' ') ||
          element.length === 0 ||
          element.length > 5
        ) {
          // 이름에 공백 포함 여부, 길이 조건 만족하는지 판단.
          Console.print('올바르지 않은 입력');
          throw new Error('[Error]: 자동차 이름이 중복되거나 올바르지 않습니다.');
        }
      });

      return true;
    }

    function makeArrayOfCars(carInput) {
      const TMP_CARS = carInput.split(',');

      TMP_CARS.forEach((element) => {
        CARS_ARRAY.push(new Car(element, 0));
      });

      try{
        if(checkArrayOfCars(TMP_CARS)) {
          Console.print("올바른 입력");
          Console.print(CARS_ARRAY);
        }
      } catch(e) {
        Console.print(e);
      }
    }

    async function getInputCars() {
      const CAR_INPUT = await Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      );

      makeArrayOfCars(CAR_INPUT);
    }

    getInputCars();
  }
}

export default App;
