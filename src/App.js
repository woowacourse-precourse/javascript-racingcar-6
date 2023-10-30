import { Console } from '@woowacourse/mission-utils';

class App {
 validation(input) {
  const cars = input.split(',');
  const carLength = cars.length < 2;
  const nameLength = cars.some((car) => car.length < 0 || car.length > 5);
  const gap = cars.some((car) => !/^[가-힣a-zA-Z0-9]+$/.test(car));
  const deduplicateObj = new Set(cars);
  const duplicate = deduplicateObj.size !== cars.length;
  console.log(carLength, nameLength, gap, duplicate);
  if (carLength || nameLength || gap || duplicate) {
   throw new Error('[ERROR]');
  }
  return cars;
 }

 async play() {
  const input = await Console.readLineAsync('경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  const cars = this.validation(input);

  const times = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  const errOne = isNaN(times);
  const errTwo = times.trim().length === 0;
  if (errOne || errTwo) {
   throw new Error('[ERROR]');
  }

  Console.print('\n실행 결과');
  for (let i = 0; i < times; i++) {
   for (let car of cars) {
    Console.print(`${car} : `);
   }
   Console.print(` `);
  }
 }
}
export default App;
