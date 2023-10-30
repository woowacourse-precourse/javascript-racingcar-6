import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.gameStatus = true;
  }
  async play() {
    while (this.gameStatus) {
      // 1. 이름 입력하세요 콘솔
      const nameOfCars = await MissionUtils.Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
      );
      let cars = this.checkNameOfCarsLength(nameOfCars);

      // 2. 시도할 횟수는 몇 회인가요 콘솔
      const tryNumber = await MissionUtils.Console.readLineAsync(
        "시도할 횟수는 몇 회인가요?"
      );

      // 레이싱 출력
      MissionUtils.Console.print("실행 결과");
      this.forwardRacingCar(cars, tryNumber);

      // 결과 출력
      MissionUtils.Console.print(await this.consoleWhoIsTheWinner(cars));
      this.gameStatus = false;
    }
  }

  // + 이름 5자 이하. 쉼표로 구분.
  checkNameOfCarsLength(nameOfCars) {
    const cars = nameOfCars.split(",");
    for (let i = 0; i < cars.length; i++) {
      const carName = cars[i].trim();
      if (carName.length > 5) {
        throw Error("[ERROR] 이름은 다섯자 이하만 가능합니다.");
      }
    }
    return cars;
  }
  // 무작위 값 각 이름마다 생성
  getRandomNumberForEachCar() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  // "-" 생성 함수
  forwardsymbol(count) {
    return "-".repeat(count);
  }

  //- 전진 하는지 안하는지 count 함수
  forwardCount() {
    const randomNumber = this.getRandomNumberForEachCar();
    return randomNumber >= 4;
  }

  // 전진 또는 정지 결과 출력
  async forwardRacingCar(cars, tryNumber) {
    let results = [];
    for (let raceCount = 0; raceCount < tryNumber; raceCount++) {
      for (
        let racerWhoForward = 0;
        racerWhoForward < cars.length;
        racerWhoForward++
      ) {
        const isForward = this.forwardCount();
        const dashes = isForward ? this.forwardsymbol(1) : "";
        results.push(`${cars[racerWhoForward]} : ${dashes}`);
      }
      await MissionUtils.Console.print(results.join("\n"));
    }
  }

  // 최종 우승자 출력
  async consoleWhoIsTheWinner(cars) {
    const maxDashes = Math.max(...cars.map((car) => car.length));
    const winners = cars.filter((car) => car.length === maxDashes);

    if (winners.length === 1) {
      MissionUtils.Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
    }
  }
}

export default App;
