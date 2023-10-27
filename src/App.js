import { Random, Console } from "@woowacourse/mission-utils";
class App {
  async play() {
    Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")
    const CAR_INPUT = await this.getCarInput();
    const CAR_LIST = CAR_INPUT.split(",");
    if (!this.isValidCarInput(CAR_LIST)) {
      Console.print("시도할 횟수는 몇 회인가요?")

      const GAME_CNT = await this.getGameCnt();

    }
    // const CAR_LIST = await this.setCarDict(CAR_INPUT);
    // console.log(CAR_LIST);

  }

  async getCarInput() {
    return await Console.readLineAsync("")
  }
  isValidCarInput(CAR_INPUT) {
    for (let i=0; i<CAR_INPUT.length;i++) {
      if (CAR_INPUT[i].length >= 6){
        throw new Error("[ERROR] 이름은 5글자 이하로 작성해주세요")
      }
      else {
        console.log("isvalid",CAR_INPUT[i]);
      }
    }
  }
  async getGameCnt() {
    return await Console.readLineAsync("")
  }

  // async setCarDict(CAR_INPUT) {
  //
  //   return
  // }
}


export default App;
