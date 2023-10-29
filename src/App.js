import { Console } from "@woowacourse/mission-utils";
import CarList from "./CarList.js";
import MESSAGE from "./constants/message.js";

class App {
  async play() {
    const carList = new CarList();
    const carArray = await carList.getCarList();
    console.log(carList, carArray);
    const tryNumber = await this.getTryNumber();

    Console.print(MESSAGE.END_GAME_MSG);
    Array.from({ length: tryNumber }).map(() => {
      carArray.map((car) => {
        car.printScore();
      });
      Console.print("");
    });

    let maxScore = -1;
    carArray.map((data) => (maxScore = Math.max(maxScore, data.score)));
    const result = carArray.filter((data) => maxScore === data.score);
    const lastWinner = result.map((data) => data.name).join(", ");
    Console.print(`최종 우승자 : ${lastWinner}`);
  }

  async getTryNumber() {
    Console.print(MESSAGE.INPUT_TRYNUMBER_MSG);
    const tryNumber = await Console.readLineAsync("");
    return tryNumber;
  }
}

export default App;
