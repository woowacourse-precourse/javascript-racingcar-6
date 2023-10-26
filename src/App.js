import Car from './racingCars/Car.js';
import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 1. (입력) 경주할 차 이름 입력
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const carNameList = carNames.split(',');

    // 2. (입력) 시도할 횟수
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    // 3. 자동차 객체 만들기 -> 인스턴스 배열 생성
    const racingCarItem = carNameList.map((carName) => {
      const car = new Car(carName);
      return car;
    });

    // 4. 시도 횟수만큼 반복하여 자동차 이동 상태 출력
    let i = 0;
    while (i < tryCount) {
      for (const car of racingCarItem) {
        car.checkMoveCondition();
        Console.print(car.showMoveStatus());
      }
      Console.print('\n');
      i++;
    }

    // 5. 우승자 찾기
    const findWinner = () => {
      let maxNumber = -Infinity;
      let winners = [];
      for (const car of racingCarItem) {
        const moveCountResult = car.getTotalMove();
        if (moveCountResult > maxNumber) {
          maxNumber = moveCountResult;
          winners = [car];
        } else if (moveCountResult === maxNumber) {
          winners.push(car);
        }
      }
      return winners;
    };

    const winnerNames = [...findWinner()].map((i) => i.name);
    Console.print(`최종 우승자 : ${winnerNames}`);
  }
}

export default App;
