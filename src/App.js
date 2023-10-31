import {Random, Console} from '@woowacourse/mission-utils';

class App {
    /* 
    * 클래스의 생성자 메서드
    * cars라는 빈 배열을 초기화
    * 경주에 참여하는 자동차 객체를 저장할 목적으로 사용
    **/
    constructor() {
      this.cars = [];
    }

  async play() {
    await this.inputCarNamesAsync();
    const numberOfMoves = await this.inputNumberOfMovesAsync();
    this.startRace(numberOfMoves);
    this.printRaceResult();
  }

    /* 
    * 사용자로부터 자동차 이름을 입력받습니다.
    * 이 메서드에서 입력받은 자동차 이름은 5자 이하인지 확인한 후, 자동차 객체를 생성
    * this.cars 배열에 저장
    **/
    async inputCarNamesAsync() {
      const carNamesInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):");
      const carNames = carNamesInput.split(',').map(name => name.trim());
      if (carNames.some(name => name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }

      this.cars = carNames.map(name => ({ name, position: 0 }));
    }

      /*
    * 이 메서드는 사용자로부터 시도할 횟수를 입력받습니다.
    * 입력값이 숫자인지 확인하고, 정수로 변환하여 반환
    **/
  async inputNumberOfMovesAsync() {
    const numberOfMoves = await Console.readLineAsync("시도할 횟수를 입력하세요:");
    if (isNaN(numberOfMoves)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    return parseInt(numberOfMoves, 10);
  }

    /*
    * 이 메서드는 경주를 시작합니다.
    * 주어진 numberOfMoves 횟수만큼 반복하면서 각 자동차에 대해 무작위로 숫자를 생성하고, 
    * 생성된 숫자가 4 이상인 경우에만 자동차의 위치를 1씩 증가시킵니다.
    **/
    startRace(numberOfMoves) {
      for (let i = 0; i < numberOfMoves; i++) {
        this.cars.forEach(car => {
          const randomValue = Random.pickNumberInRange(0, 9);
          if (randomValue >= 4) {
            car.position += 1;
          }
        });
      }
    }

  /*
    * 이 메서드는 경주 결과를 출력합니다.
    * 각 자동차의 현재 위치를 기반으로 "-" 문자를 사용하여 경주 상황을 시각적으로 표시
    **/
  printRaceResult() {
    this.cars.forEach(car => {
      const dash = '-'.repeat(car.position);
      Console.print(`${car.name} : ${dash}`);
    });
  }

}

export default App;
