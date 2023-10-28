import {Console, Random} from "@woowacourse/mission-utils";

class App {
  async play() {

    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    const CAR_INPUT = await this.getCarInput();
    if (this.isValidCarInput(CAR_INPUT)) {
      const CAR_DICT = await this.setCarDict(CAR_INPUT);
      Console.print("시도할 횟수는 몇 회인가요?")
      let CNT = await this.getGameCnt();

    }else {
      throw new Error("[ERROR] 이름은 5글자 이하로 작성해주세요")
    }
  }
  async getCarInput() {
    return (await Console.readLineAsync('')).split(',');
  }
  isValidCarInput(CAR_INPUT) {
    for (let i=0; i<CAR_INPUT.length;i++) {
      if (CAR_INPUT[i].length >= 6){
        return false
      }
      else {
        return true
      }
    }
  }
  async setCarDict(CAR_INPUT) {
    const dictionary = {};
    for (const car of CAR_INPUT) {
      dictionary[car] = [];
    }
    return dictionary;
  }
  async getGameCnt() {
    return await Console.readLineAsync("")
  }

}
export default App;
