import { Console } from "@woowacourse/mission-utils";
// models
import RaceCar from "../models/RaceCar";

// views
import InputCarNameView from "../views/InputCarNameView";
import RoundResultView from "../views/RoundResultView";
import InputTrialNumberView from "../views/InputTrialNumberView";

export class Controller {
  newRaceCar() {
    const racecar = new RaceCar();
    racecar.name = InputCarNameView;
  }
}
