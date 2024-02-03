/* eslint-disable no-plusplus */
import {Console} from "@woowacourse/mission-utils";
import Car from "./Car.js";
import Validator from "./Validator.js";
import InputOutput from "./InputOutput.js";
import { startComment, winnerCommnet, LINE_BREAK } from "./Constant.js";

class App {
  #garage = [];

  constructor() {
    this.validator = new Validator();
    this.inputOutput = new InputOutput();
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
    const carNameList = await this.inputOutput.getCarNames();
    this.makingCar(carNameList);
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
    // Console.print(startComment);
    this.inputOutput.print(startComment)
    const userInputCount = await this.inputOutput.getAttemptCount();
    this.simulateRace(userInputCount);
  }

  simulateRace(count){
    for (let i = 0; count > i; i++){
      this.#garage.forEach(car => {
        car.tryAdvance();
        Console.print(`${car.getName()} : ${car.getMovedDistance()}`)
      });
      this.inputOutput.print(LINE_BREAK)
    }
  }

  award(){
    const countScoreList = this.countScore();
    this.announceWinners(countScoreList);
  }

  countScore(){
    const scoreBoard = []
    this.#garage.forEach(car => {
      scoreBoard.push(car.getMovedDistance().length);
    })
    return scoreBoard;
  }

  announceWinners(scoreList){
    const winnerScore = Math.max(...scoreList);
    const winner = this.#garage.filter(car => car.getMovedDistance().length === winnerScore).map(car => car.getName());
    // Console.print(`${winnerCommnet} : ${winner}`)
    this.inputOutput.print(`${winnerCommnet} : ${winner}`);
  }
}

export default App;
