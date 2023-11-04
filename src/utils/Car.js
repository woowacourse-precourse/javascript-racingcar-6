import { MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  constructor (name) {
    this.name = name;
    this.distance = 0;
  }

  async isSuccess (randomNumber) {
    const TARGET_NUMBER = 4;
    return randomNumber > TARGET_NUMBER ? true : false ;
  }

  async getResultMessage (success) {
    let result = '';
    if (success) {
      this.distance = this.distance + 1;
    }
    result = `${this.name} : ${'-'.repeat(this.distance)}`;
    return result;
  }
}
