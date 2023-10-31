import Car from "../Car.js";
import Input from "./../view/Input.js";
import Output from "./../view/Output.js";
import { MissionUtils } from "@woowacourse/mission-utils";
class RacingController {
  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.tryNumber = 0;
    this.cars = [];
  }
  async run() {
    try {
      await this.makeCarsArray();
      this.tryNumber = parseInt(await this.input.inputTryNumber());
      MissionUtils.Console.print("실행 결과\n");
      while (this.tryNumber > 0) {
        this.moveCars();
        this.tryNumber--;
      }
      this.output.printWinners(this.cars);
    } catch (error) {
      throw error;
    }
  }
  async makeCarsArray() {
    try {
      const car_name_list = await this.input.inputCarNames();
      car_name_list.forEach((name) => {
        const car = new Car(name);
        this.cars.push(car);
      });
    } catch (error) {
      throw error;
    }
  }
  moveCars() {
    this.cars.forEach((car) => {
      car.pickRandomNumber();
      car.moveOneStep();
    });
    this.output.printResult(this.cars);
  }
}

export default RacingController;
