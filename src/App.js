import { Console } from '@woowacourse/mission-utils';

class App {
 validation(cars) {
  const carLength = cars.length < 2;
  const nameLength = cars.some((car) => car.length < 0 || car.length > 5);
  const gap = cars.some((car) => /^[가-힣a-zA-Z0-9]+$/.test(car));
  const deduplicateObj = new Set(cars);
  const duplicate = deduplicateObj.size !== cars.length;
  if (carLength || nameLength || gap || duplicate) {
   throw new Error('[ERROR]');
  }
 }
 async play() {
  const input = await Console.readLineAsync('경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
  //,쉼표 기준으로 자르기
  const cars = input.split(',');
  this.validation(cars);
 }
}
export default App;
