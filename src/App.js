import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async readCar() {
    let inputCar = await MissionUtils.Console.readLineAsync(
      `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)`
    );

    // 입력값 검증
    let temp = inputCar.split(",");
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].length <= 0) {
        throw new Error("[ERROR] 이름이 없는 자동차가 있습니다.");
      }
      if (temp[i].length >= 6) {
        throw new Error("[ERROR] 이름이 6자 이상인 자동차가 있습니다.");
      }
    }

    return temp;
  }
  async readCount(){
    let inputCount = await MissionUtils.Console.readLineAsync(
      `시도할 횟수는 몇 회인가요?`
    );

    if (isNaN(inputCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }
    if (inputCount <= 0){
      throw new Error("[ERROR] 1 이상인 숫자를 입력해야 합니다.");
    }
    
    return inputCount
  }
  async play() {
    // const number = MissionUtils.Random.pickNumberInRange(1, 9);
    let carList = await this.readCar();
    console.log(carList);
    let count = await this.readCount();
    console.log(count);
  }
}

export default App;

const app = new App();
app.play();
