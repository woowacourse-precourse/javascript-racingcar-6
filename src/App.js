import { MissionUtils } from "@woowacourse/mission-utils";
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
    try {
      const carName = await this.getCarName();
      const tryNum = await this.getTryNum();
      this.result(carName, tryNum);
    } finally {
      this.rl.close(); // readline 인터페이스를 닫아줍니다.
    }
  }
  // 차 이름 받기 (유저 입력 받는 것 앞에는 비동기가 있어야 하나?)
  async getCarName() {
    return new Promise((resolve, reject) => {
      this.rl.question(
        "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분)",
        function (userInput) {
          const carName = userInput.split(",");
          for (let i = 0; i < carName.length; i++) {
            if (carName[i].length > 5) {
              throw new Error("[ERROR] 이름이 잘못된 형식입니다.");
            } else {
              resolve(carName);
              return carName;
            }
          }
        }
      );
    });
  }

  //시도 횟수 받기
  async getTryNum() {
    return new Promise((resolve, reject) => {
      this.rl.question("시도할 횟수는 몇 회인가요?", function (userNumInput) {
        const tryNum = userNumInput;
        if (isNaN(tryNum) || tryNum < 0) {
          throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        } else {
          resolve(tryNum);
          return tryNum;
        }
      });
    });
  }
  //결과 받기
  result(carName, tryNum) {
    console.log("실행 결과");
    //전진한 횟수 저장하는 변수
    var goCount = [];
    for (let i = 0; i < carName.length; i++) {
      goCount.push(0);
    }
    // 총 tryNum만큼 실행
    for (let k = 0; k < tryNum; k++) {
      for (let i = 0; i < carName.length; i++) {
        const randomNum = MissionUtils.Random.pickNumberInRange(0, 9); //랜덤한 숫자 불러오기
        if (randomNum >= 4) {
          goCount[i] += 1;
        }
        console.log(carName[i], ":", "-".repeat(goCount[i]));
      }
    }
    //우승자 return 하기
    const winner = [];
    const maxLong = Math.max.apply(null, goCount);
    for (let i = 0; i < goCount.length; i++) {
      if (goCount[i] == maxLong) {
        winner.push(carName[i]);
      }
    }

    console.log(`최종 우승자 : ${winner}`);
  }
}
const app = new App();
app.play();

export default App;

//왜 게임 재실행 하려고 하면 안 되는 거지?
