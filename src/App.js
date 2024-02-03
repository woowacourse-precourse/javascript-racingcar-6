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
    this.award();
  }

  async settingGarage(){
    const carNameList = await this.getCarNames();
    this.makingCar(carNameList);
  }

  // eslint-disable-next-line class-methods-use-this
  async getCarNames(){
    const userInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNameList = userInput.split(",");
    Console.print(`${carNameList}`);
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
    Console.print("실행 결과");
    const userInputCount = await this.getTryAdvanceCount();
    for (let i = 0; userInputCount > i; i++){
      this.#garage.forEach(car => {
        car.tryAdvance();
        Console.print(`${car.getName()} : ${car.getMovedDistance()}`)
      })
      Console.print('\n');
    }
  }

  async getTryAdvanceCount(){
    const userInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    if (this.validator.isNumber(userInput)) throw new Error("[ERROR] 올바르지 않은 형식의 입력입니다.");
    return userInput;
  }

  award(){
    let scoreBoard = []
    this.#garage.forEach(car => {
      scoreBoard.push(car.getMovedDistance().length);
    })
    console.log(scoreBoard);
    
    const winnerScore = Math.max(...scoreBoard);
    const winner = this.#garage.filter(car => car.getMovedDistance().length === winnerScore).map(car => car.getName());

    Console.print(`최종 우승자 : ${winner}`)
  }
}

export default App;
