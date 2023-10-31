import Car from "./Car.js";

class RacingcarGame {
  racingCar = {};
  async start() {
    //UserInput.getCarNames() 으로 자동차 이름을 입력받는다.
    //UserInput.getTryNumber() 으로 시도 횟수를 입력받는다.
    // 자동차 이름을 키로, 값을 0으로 갖는 객체 racingCar 를 만든다.
    // 시도 횟수만큼 반복하여 race()를 호출한다.
    // 시도 횟수가 종료되면 printWinner()로 우승자를 출력하고 종료한다.
  }

  race() {
    const car = new Car();

    for (let carName in this.racingCar) {
      if (car.chooseGoOrStop()) {
        this.racingCar[carName]++;
      }
    }

    this.printRacingResult();
  }

  printRacingResult() {
    // 첫번째 실행결과 출력일때만 '실행 결과' 문구를 출력한다.
    // racingCar 를 순회하며 자동차이름 : 결과를 출력한다.
    // 결과를 출력할 땐, "-".repeat(number) 을 사용할 수 있다.
    // 맨 마지막 공백 줄이 있어야 한다.
  }

  printWinner() {
    // getWinner()로 우승자를 확인한다.
    // 반환된 값의 길이가 1이라면 우승자는 1명이므로 "최종 우승자 : 자동차이름" 출력한다.
    // 반환된 값의 길이가 2이상이면 우승자는 여러 명이므로 join 매서드 사용하여 "최종 우승자 : 자동차1, 자동차2" 출력한다.
  }

  getWinner() {
    // racingCar를 순회하며 가장 높은 값을 가진 자동차 이름을 찾는다.
    // 자동차 이름이 담긴 배열을 반환한다.
  }
}

export default RacingcarGame;
