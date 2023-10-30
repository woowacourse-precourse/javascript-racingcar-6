import { getCarName } from "./utils/getCarName.js";
import { getRaceCount } from "./utils/getRaceCount.js";
import { getRaceResult } from "./utils/getRaceResult.js";
import { getWinner } from "./utils/getWinner.js";

import { Car } from "./CarObject.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNameArray = await getCarName();
    let carObject = Car.createCars(carNameArray);

    const raceCount = await getRaceCount();
    Console.print("\n실행 결과");

    for (let i = 0; i < raceCount; i++) {
      carObject = Car.addRace(carObject);
      getRaceResult(carObject);
    }
    
    getWinner(carObject);
  }
}

export default App;
