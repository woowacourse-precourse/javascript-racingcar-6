import { MissionUtils } from "@woowacourse/mission-utils";
import { Car } from "./car.js"

class App {

  checkPlayerInput(playerArr)
  {
    const cars =[];
    for (let player of playerArr)
    {
      if (player.length > 5){
        throw new Error("[ERROR] 5글자 이상의 이름을 입력하세요.");
      }
      const car = new Car(player);
      cars.push(car);
    }
    return cars;
  }

  checkRoundInput(round) {
      const ret = parseInt(round);
      if (isNaN(ret)) {
        throw new Error("[ERROR] 숫자가 아닙니다.");
      }
      if (ret < 0) {
        throw new Error("[ERROR] 양수가 아닙니다.");
      }
      return ret;
    }

  findWinner(cars)
  {
    const max = Math.max(...cars.map((car) => car.pos));
    const winner = cars.filter((car) => car.pos === max);

    return winner;
  }

  printResult(cars)
  {
    const winners = this.findWinner(cars);

    MissionUtils.Console.print("최종 우승자 : " + winners.map((winner) => winner.name).join(", "));
  }

  race(cars, round)
  {
    MissionUtils.Console.print("\n실행 결과");
    for (let i = 0 ; i < round ; i++)
    {
      for (let car of cars)
        car.race();
      MissionUtils.Console.print("");
    }
  }

  async racingGame()
  {
    let playerInput = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const cars = this.checkPlayerInput(playerInput.split(","));

    let roundInput = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    const round = this.checkRoundInput(roundInput);

    this.race(cars, round);
    this.printResult(cars);
  }

  async play() {
	  await this.racingGame();
  }
}

export default App;
