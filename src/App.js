import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
class App {
  findCarsWithMaxForward(cars) {
    if (cars.length === 0) {
      return [];
    }

    const maxForward = Math.max(...cars.map((car) => car.forward));
    const carsWithMaxForward = cars.filter((car) => car.forward === maxForward);

    return carsWithMaxForward;
  }

  checkRoundInput(round) {
    const intRound = parseInt(round);
    if (isNaN(intRound)) {
      throw new Error("[ERROR] 숫자를 입력해주세요.");
    }

    if (intRound < 0) {
      throw new Error("[ERROR] 양수를 입력해주세요.");
    }

    return intRound;
  }

  checkPlayersInput(players) {
    const playerArray = players.split(",");
    const cars = [];
    for (let player of playerArray) {
      if (player.length > 5) {
        throw new Error("[ERROR] 5자리 이하의 이름만 가능합니다.");
      }

      const car = new Car(player);
      cars.push(car);
    }

    return cars;
  }

  async executePlay() {
    let players = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const cars = this.checkPlayersInput(players);
    let round = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const rounds = this.checkRoundInput(round);
    await MissionUtils.Console.print("\n실행 결과");
    for (let i = 0; i < rounds; i++) {
      for (let car of cars) {
        car.run();
        car.printRunResult();
      }

      await MissionUtils.Console.print("");
    }

    const members = this.findCarsWithMaxForward(cars);
    await MissionUtils.Console.print("최종 우승자 : " + members.map((member) => member.name).join(", "));
  }

  async play() {
    await this.executePlay();
  }
}

export default App;
