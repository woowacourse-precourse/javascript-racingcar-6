import getCarName from "./getCarName.js"
import getAttemptsNumber from "./getAttemptsNumber.js"
import Cars from "./Cars.js"
import Car from "./Car.js"

import { 
  Console,
 }
  from "@woowacourse/mission-utils";
class App {
  async play() {

    const carNameArray = await getCarName();

    const cars = new Cars(carNameArray);

    const attemptsNumber = await getAttemptsNumber();

    Console.print(`\n실행 결과\n`);

    for(var i = 0; i < attemptsNumber; i++){
      cars.moveAllCars();
      cars.printEachStep();
      Console.print(``);
    }
    cars.findWinner();
    Console.print(`최종 우승자 : ${cars.getWinnerString()}`);
  }
}

export default App;
