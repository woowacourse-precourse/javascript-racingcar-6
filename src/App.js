import {Console} from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  #garage = [];

  constructor() {
    this.validator = new Validator();
  }

  async play() {
    await this.mainLogic();
  }

  async mainLogic(){
    await this.getCarNames();
  }

  async getCarNames(){
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameList = userInput.split(",");
    this.setCar(carNameList);
  }

  setCar(carList){
    carList.forEach(item => {
      if (this.validator.isValidCarName(item)){
        const car = new Car(item);
        this.#garage.push(car);
      }
    });
  }
}

export default App;
