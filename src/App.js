import Car from "./Car.js"; // Car 클래스를 가져옴
import { Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.cars = []; //경주할 자동차들
    this.tries = 0; //시도 횟수
  }

  async play() {
    await this.getInputData(); //입력값 받기
    await this.startRacing(); //경주 시작하기
    this.displayWinners(); //우승자 출력하기
  }

  //입력값 받기
  async getInputData() {
    //자동차 이름 입력 받기
    let names = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) "
    );
    this.validateNames(names);
    this.cars = names.split(",").map((name) => new Car(name.trim()));

    //시도 횟수 입력 받기
    let tries = await Console.readLineAsync("시도할 횟수는 몇회인가요? ");
    this.validateTries(tries);
    this.tries = parseInt(tries, 10);
  }

  //이름 유효성 검사
  validateNames(names) {
    const nameList = names.split(",").map((name) => name.trim()); //쉼표로 구분하여 배열에 넣기
    if (!nameList.every((name) => name && name.length <= 5)) {
      throw new Error(
        "[ERROR] 자동차 이름은 1글자 이상, 5글자 이하로 입력해야 합니다."
      );
    }
    if (new Set(nameList).size !== nameList.length) {
      throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
    }
  }

  //시도 유효성 검사
  validateTries(tries) {
    if (isNaN(tries) || parseInt(tries, 10) < 1) {
      throw new Error(
        "[ERROR] 시도할 횟수는 숫자로 입력해야 하며, 1회 이상이어야 합니다."
      );
    }
  }

  //경주 시작하기
  async startRacing() {
    Console.print("\n실행 결과");
    //시도 횟수만큼 경주 결과 보여주기
    for (let i = 0; i < this.tries; i++) {
      this.cars.forEach((car) => car.move());
      this.displayCars();
    }
  }

  //경주 결과 출력하기
  displayCars() {
    this.cars.forEach((car) => {
      const result = `${car.name} : ${"-".repeat(car.position)}`; //자동차별로 각 위치 표시하기
      Console.print(result);
    });
    Console.print("");
  }

  //경주 우승자 출력하기
  displayWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.position)); //위치 값 최대 찾기
    const winners = this.cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name); //우승자 추리기
    Console.print(`최종 우승자 : ${winners.join(", ")}`); //쉼표로 우승자 연결
  }
}

export default App;
