import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(CARS) {
  CARS.forEach((car) => {
    let info = car.name + " : ";
    for (let i = 0; i < car.go; i++) info += "-";
    MissionUtils.Console.print(info);
  });
  MissionUtils.Console.print("\n");
}
