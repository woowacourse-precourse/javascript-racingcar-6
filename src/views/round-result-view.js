import { MissionUtils } from "@woowacourse/mission-utils";

const message = {
  resultStart: "\n실행 결과",
};

class RoundResultView {
  printResultStart() {
    MissionUtils.Console.print(message.resultStart);
  }

  #toCarLocationString({ name, location }) {
    const LOCATION_CHARACTER = "-";
    const locationString = LOCATION_CHARACTER.repeat(location);
    const carLocationString = `${name} : ${locationString}`;

    return carLocationString;
  }

  printCurrentRoundCars(cars) {
    const generatedMessage = 
      cars
        .map(this.#toCarLocationString)
        .join("\n");
    
    MissionUtils.Console.print(`${generatedMessage}\n`);
  }
}

export default RoundResultView;
