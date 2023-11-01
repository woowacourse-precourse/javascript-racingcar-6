import MakeRandomNum from "../RandomNum/makeRandomNum";
import { MissionUtils } from "@woowacourse/mission-utils";

function CarRacing(List) {
  List.forEach((carElement) => {
    let randomNumber = MakeRandomNum();
    if (randomNumber >= 4) {
      carElement.plusCount();
    }

    MissionUtils.Console.print(`${carElement.name} : ${"-".repeat(carElement.count)}`);
  });
}

export default CarRacing;
