import { Console, Random } from '@woowacourse/mission-utils';
import {
  validate,
  inputCarRegex,
  inputCarDuplicateRegex,
  inputNumberRegex,
} from './validate.js';

class App {
  async play() {
    Console.print('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
    const carInput = (await Console.readLineAsync('')).trim();
    if (!validate(carInput, inputCarRegex)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    if (validate(carInput, inputCarDuplicateRegex)) {
      throw new Error('[ERROR] 중복된 입력값입니다.');
    }
    const cars = carInput.split(',');

    Console.print('시도할 횟수는 몇 회인가요?');
    const retryInput = (await Console.readLineAsync('')).trim();
    if (!validate(retryInput, inputNumberRegex)) {
      throw new Error('[ERROR] 입력이 잘못된 형식입니다.');
    }
    const retry = Number(retryInput);

    Console.print('실행 결과');
    const carsProgress = Object.fromEntries(cars.map((k) => [k, 0]));
    for (let i = 0; i < retry; i += 1) {
      cars.forEach((car) => {
        carsProgress[car] += Random.pickNumberInRange(0, 9) >= 4;
        Console.print(`${car} : ${'-'.repeat(carsProgress[car])}`);
      });
      Console.print('');
    }

    const winners = cars.reduce((acc, car) => {
      if (!acc.length) {
        return [car];
      }
      if (carsProgress[car] > carsProgress[acc[0]]) {
        return [car];
      }
      if (carsProgress[car] === carsProgress[acc[0]]) {
        return [...acc, car];
      }
      return acc;
    }, []);
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default App;
