import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class RacingCar {
    #carList

    async start() {
      await this.getCarsNames();
    }

    async getCarsNames() {
      const input = await Console.readLineAsync('이름은 쉼표(,) 기준으로 구분\n');
      this.#carList = input.split(',').forEach((car) => {
        this.#carList.push(new Car(car, 0));
      })
      console.log(this.#carList);
    }
}

export default RacingCar;