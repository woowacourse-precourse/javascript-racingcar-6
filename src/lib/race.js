// 파일명 : race.js
// 설명 : 레이스 진행

import Random from "./random.js";
import { Message } from "./message.js";
import { MissionUtils } from "@woowacourse/mission-utils";

class Race {
  constructor(cars, race) {
    this.random = new Random();
    this.message = new Message();
    this.race = race;
    this.cars = cars;
    this.raceResult = [];
    this.winner = [];
    this.max = 0;

    for (let i = 0; i < cars.length; i++) {
      this.raceResult.push(0);
    }
  }

  async start() {
    // "실행 결과" 출력
    await MissionUtils.Console.print(this.message.raceResultMessage);

    for (let i = 0; i < this.race; i++) {
      await this.raceTry();
      await this.printRaceResult();
    }

    await this.getWinner();
    await this.printWinner();
  }

  async raceTry() {
    for (let i = 0; i < this.raceResult.length; i++) {
      const result = await this.getRaceResult();
      this.raceResult[i] += result;
    }
  }

  async getRaceResult() {
    const randomNumber = await this.random.getRandomNumber();
    if (randomNumber >= 4) {
      return 1;
    }
    return 0;
  }

  async printRaceResult() {
    for (let i = 0; i < this.raceResult.length; i++) {
      const car = this.cars[i];
      const result = "-".repeat(this.raceResult[i]);
      await MissionUtils.Console.print(`${car} : ${result}`);
    }
    await MissionUtils.Console.print("");
  }

  async getWinner() {
    for (let i = 0; i < this.raceResult.length; i++) {
      await this.setMax(this.raceResult[i]);
    }

    for (let i = 0; i < this.raceResult.length; i++) {
      await this.pushWinner(i);
    }
  }

  async setMax(num) {
    if (num > this.max) {
      this.max = num;
    }
  }

  async pushWinner(i) {
    if (this.raceResult[i] === this.max) {
      this.winner.push(this.cars[i]);
    }
  }

  async printWinner() {
    const winner = this.winner.join(", ");
    MissionUtils.Console.print(`${this.message.raceWinner}${winner}`);
  }
}

export default Race;
