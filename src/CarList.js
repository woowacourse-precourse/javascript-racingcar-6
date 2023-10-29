import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import MESSAGE from "./constants/message.js";

class CarList {
  carList = [];

  async getCarList() {
    Console.print(MESSAGE.INPUT_CARNAME_MSG);
    const carInput = await Console.readLineAsync("");
    const carInputArray = carInput.split(",");
    carInputArray.map((data) => {
      if (data.length > 5) throw new Error(MESSAGE.OVER_NAMELENGTH_MSG);
    });
    const carObjectArray = carInputArray.map((carName) => new Car(carName, 0));
    return carObjectArray;
  }
}

export default CarList;
