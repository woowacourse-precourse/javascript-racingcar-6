import NumberGenerator from './NumberGenerator.js';
import { MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  constructor (name) {
    this.name = name;
    this.distance = 0;
  }

  async isSuccess () {
    const numberGenerator = new NumberGenerator();
    const result = await numberGenerator.getRandomNumber();
    return result >= 4 ? true : false ;
  }

  async getResultMessage (success) {
    let result = '';
    if (success) {
      this.distance = this.distance + 1;
    }
    result = `${this.name} : ${'-'.repeat(this.distance)}`;
    return result;
  }

  async moveForwards () {
    const success = await this.isSuccess();
    let result = await this.getResultMessage(success);
    await MissionUtils.Console.print(result);
    return this.distance;
  }
}
