import { Console } from "@woowacourse/mission-utils";

class RacingCar {
    #cars

    async start() {
      await this.getCarsNames();
    }

    async getCarsNames() {
      const input = await Console.readLineAsync('이름은 쉼표(,) 기준으로 구분\n');
      this.#cars = input.split(',').reduce((acc, car) => {
        acc[car] = 0;
        return acc;
      },{});
    }
}

export default RacingCar;