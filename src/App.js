/* eslint-disable max-classes-per-file */
import { Random, Console } from '@woowacourse/mission-utils';

export class Car {
  constructor(name, value = 0) {
    this.name = name;
    this.value = value;
  }
}

export function goStop(carObj) {
  carObj.forEach((e) => {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      e.value += 1;
    }
  });
}

export function carPrint(carObj) {
  carObj.forEach((e) => Console.print(`${e.name} : ${'-'.repeat(e.value)}`));
  Console.print('');
}
export function winnerValue(carObj) {
  const winnerCount = carObj.sort((a, b) => a.value < b.value);
  const winnerCountArr = winnerCount.map((a) => +a.value);
  const winNumber = Math.max(...winnerCountArr);

  return winNumber;
}

export function winner(carObj) {
  const winNumber = winnerValue(carObj);

  const winName = [];
  carObj.forEach((element) => {
    if (element.value === winNumber) {
      winName.push(element.name);
    }
  });
  Console.print(`최종 우승자: ${winName}`);
}

export function carPlay(numInput, carObj) {
  for (let index = 0; index < numInput; index += 1) {
    goStop(carObj);
    carPrint(carObj);
  }
}

class App {
  async play() {
    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분): ',
    );

    const numInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?: ',
    );

    const carArr = carInput.split(',').map((e) => {
      if (e.length >= 5) {
        throw new Error('[ERROR] 올바른 형식이 아닙니다');
      }
      return e;
    });
    const carObj = carArr.map((e) => new Car(e));

    carPlay(numInput, carObj);
    winner(carObj);
  }
}

export default App;
