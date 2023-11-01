import { MissionUtils } from "@woowacourse/mission-utils";

export default function printResult(CARS) {
  CARS.forEach((car) => {
    let info = car.name + " : ";
    info += "".padStart(car.go, "-");
    MissionUtils.Console.print(info);
  });
  MissionUtils.Console.print("");
}
