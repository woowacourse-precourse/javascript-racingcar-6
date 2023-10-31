import { MissionUtils } from "@woowacourse/mission-utils";
import { Message, ErrorMessage } from "../constants/Message";
import CarRace from "./CarRace";

class App {
  async play() {
    const namesInput = await MissionUtils.Console.readLineAsync(Message.INIT);
    const carsName = namesInput.split(",");
    checkCarsName(carsName);
    const tryNum = await MissionUtils.Console.readLineAsync(Message.TRYNUMBER);
    checkTryNum(tryNum);
    MissionUtils.Console.print(Message.PLAY);
    const carRace = new CarRace(carsName);
    for (let i = 0; i < tryNum; i += 1) {
      carRace.play();
      carRace.showResult();
      MissionUtils.Console.print("");
    }
    carRace.showWinner();
  }
}

const checkCarsName = (carsName) => {
  carsName.forEach((item) => {
    if (item.length > 5 || item.length < 1) {
      throw new Error(ErrorMessage.INPUTCARNAME);
    }
  });
};

const checkTryNum = (tryNum) => {
  if (isNaN(Number(tryNum))) {
    throw new Error(ErrorMessage.INPUTNUMBER);
  }
};

export default App;
