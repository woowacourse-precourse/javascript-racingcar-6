import { MissionUtils } from "@woowacourse/mission-utils";
import { rejects } from "assert";
import { resolve } from "path";
import * as readline from "readline";

class App {
  constructor() {
    //사용자 입력 받기
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  async play() {
    await this.startGame();
  }
  async startGame() {
    //차 이름 받기
    const carName = await this.getCarName();
  }
  //차 이름 받기 (유저 입력 받는 것 앞에는 비동기가 있어야 하나?)
  async getCarName() {
    return new Promise((resolve, reject) => {
      this.rl.question(
        "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분)",
        function (userInput) {
          const carName = userInput.split(",");
          for (let i = 0; i < carName.length; i++) {
            if (carName[i].length > 5) {
              console.log("[ERROR] 이름이 잘못된 형식입니다.");
              reject(undefined);
            } else {
              resolve(carName);
              console.log(carName);
              return carName;
            }
          }
        }
      );
    });
  }
}
const app = new App();
app.play();

export default App;
