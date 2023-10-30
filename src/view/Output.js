import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;

class Output {
  printResult(Cars) {
    Cars.forEach((car) => {
      Console.print(`${car.name} : ${car.dash.repeat(car.move_times)}`);
    });
    Console.print("\n");
  }

  printWinners(Cars) {
    const max_time = Math.max(...Cars.map((car) => car.move_times));
    const winners = Cars.filter((car) => car.move_times === max_time)
      .map((car) => car.name)
      .join(",");
    Console.print(`최종 우승자 : ${winners}`);
  }
}
export default Output;
