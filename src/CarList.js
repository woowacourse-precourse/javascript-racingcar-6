import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class CarList {
  carList = [];

  async getCarList() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carInput = await Console.readLineAsync("");
    const carInputArray = carInput.split(",");
    carInputArray.map((data) => {
      if (data.length > 5) throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    });
    const carObjectArray = carInputArray.map((carName) => new Car(carName, 0));
    return carObjectArray;
  }
}

export default CarList;
