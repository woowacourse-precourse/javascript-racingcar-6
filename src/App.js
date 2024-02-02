import {Console} from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Validator from "./Validator.js";

class App {
  #carList = [];

  constructor() {
    this.validator = new Validator();
  }

  async play() {
    await this.mainLogic();
  }

  async mainLogic(){
    await this.getUserCarNames();
  }

  async getUserCarNames(){
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameList = userInput.split(",")
    // console.log('userinput',userInput, typeof userInput)

    carNameList.forEach(item => {
      if (this.validator.isValidCarName(item)) this.#carList.push(item)
    });
  }
}

export default App;
