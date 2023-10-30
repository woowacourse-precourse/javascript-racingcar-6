import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    const CAR = await Console.readLineAsync('');
    const CAR_LIST = CAR.split(',');
    this.validateCarNameLength(CAR_LIST);

    const SCORES = [];
    const RACE = CAR_LIST.map((car) => {
      SCORES.push(0);
      return `${car} : `;
    });


  validateCarNameLength(carList) {
    carList.forEach((car) => {
      if (car.length > 5) {
        throw new Error('[ERROR] 자동차 이름은 5자 이하로 입력해 주세요.');
      }
    });
  }

}

export default App;
