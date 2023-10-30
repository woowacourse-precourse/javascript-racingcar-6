import Car from "../Car";
import Input from "./../view/Input";
import Output from "./../view/Output";
class RacingController {
  constructor() {
    this.input = new Input();
    this.output = new Output();
    this.tryNumber = 0;
    this.cars = [];
  }
  async run() {
    this.makeCarsArray();
    this.tryNumber = parseInt(await this.input.inputTryNumber());

    Console.print("실행 결과\n");
    while (tryNumber > 0) {
      this.moveCars();
      tryNumber--;
    }

    this.output.printWinners(this.cars);
  }
  async makeCarsArray() {
    const car_name_list = await this.input.inputCarNames();
    // [a,b,c]가 입력이 됐다. 객체 3개를 만들어야한다.
    car_name_list.forEach((name) => {
      const car = new Car(name);
      this.cars.push(car);
    });
  }
  async moveCars() {
    this.cars.forEach((car) => {
      car.pickRandomNumber();
      car.moveOneStep();
    });
    output.printResult(this.cars);
  }
}

export default RacingController;
