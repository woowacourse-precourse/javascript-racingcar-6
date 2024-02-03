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
    await this.settingGarage();
    await this.startRace();
  }

  async settingGarage(){
    const carNameList = await this.getCarNames();
    this.makingCar(carNameList);
  }

  // eslint-disable-next-line class-methods-use-this
  async getCarNames(){
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameList = userInput.split(",");
    return carNameList;
  }

  makingCar(carNameList){
    carNameList.forEach(item => {
      if (this.validator.isValidCarName(item)){
        const car = new Car(item);
        this.#garage.push(car);
      }
    });
  }

  async startRace(){
    await this.getTryAdvanceCount();
  }

  async getTryAdvanceCount(){
    const userInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (this.validator.isNumber(userInput)) throw new Error("[ERROR] 올바르지 않은 형식의 입력입니다.");
    return userInput;
  }

  
}

export default App;
