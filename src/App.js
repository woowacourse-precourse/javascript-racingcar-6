import { Console, MissionUtils } from "@woowacourse/mission-utils";

// 자동차 이름, 현재 위치
class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // 자동차를 움직이는 메서드
  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }

  // 현재 자동차의 위치를 반환하는 메서드
  getPosition() {
    return this.position;
  }

  // 자동차의 이름을 반환하는 메서드
  getName() {
    return this.name;
  }
}

// 레이스 진행 후 우승자 결정
class Race {
  constructor(carNames, round) {
    this.cars = carNames.map((name) => new Car(name));
    this.round = round;
  }

  // 한 라운드를 진행
  playRound() {
    this.cars.forEach((car) => {
      car.move(); // 각각의 자동차를 움직임
      Console.print(`${car.getName()} : ${"-".repeat(car.getPosition())}`);
    });
  }

  // 전체 게임 플레이
  playGame() {
    for (let i = 0; i < this.round; i++) {
      this.playRound(); // 지정된 라운드 수만큼 플레이
    }
  }

  // 우승자 반환
  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));
    const winners = this.cars.filter(
      (car) => car.getPosition() === maxPosition
    ); // 가장 높은 위치를 가진 자동차들을 필터링
    return winners.map((car) => car.getName()); // 우승한 자동차들의 이름을 배열로 반환
  }
}

class App {
  async play() {
    const carNamesInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요."
    );
    const roundInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    if (!carNamesInput || !roundInput) {
      throw new Error("[ERROR] 입력 값이 유효하지 않습니다.");
    }

    const carNames = carNamesInput.split(","); // 입력된 자동차를 쉼표로 분리 후 배열로 저장
    const round = parseInt(roundInput, 10); // 입력된 라운드 수를 정수로 변환

    if (isNaN(round)) {
      throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
    }

    const race = new Race(carNames, round); // Race 객체 생성 (게임 시작)
    race.playGame(); // 게임 진행
    const winners = race.getWinners(); // 우승자 결정

    Console.print(`최종 우승자 : ${winners.join(", ")}`); // 우승자 출력
  }
}

export default App;
