import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const carNames = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
    const moves = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    let moveResult = Object.fromEntries(carNames.split(",").map(name=>[name,""]))

    for (let i=0; i<moves; i++){
      Object.keys(moveResult).map((key) => moveResult[key]+=this.moveCar())
    }
  }

  moveCar(){
    const result = MissionUtils.Random.pickNumberInRange(0, 9);
    if (result>=4) return "-"
    else return ""
  }
}

export default App;
