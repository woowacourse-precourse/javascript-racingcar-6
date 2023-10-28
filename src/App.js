import { MissionUtils } from "@woowacourse/mission-utils";
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
    const carName = this.getCarName();
    //시도 횟수 받기
    const tryNum = this.getTryNum();
    //결과 받기
    const result = this.result(carName, tryNum);
    //최종우승자 받기
    const winner = this.winner();
    console.log(winner);
  }
  //차 이름 받기
  getCarName() {
    this.rl.question(
      "경주할 자동차 이름을 입력하세요.(이름은 쉽표(,) 기준으로 구분)",
      function (userInput) {
        const carName = Array.from(userInput).map(",");
      }
    );
    console.log(carName);
    return carName;
  }
  //시도 횟수 받기
  getTryNum() {
    return new Promise((resolve, reject) => {
      this.rl.question("시도할 횟수는 몇 회인가요?", function (userNumInput) {
        const tryNum = userNumInput;
        if (isNaN(userNumInput) || userNumInput < 0) {
          console.log("[ERROR] 숫자가 잘못된 형식입니다.");
          reject(undefined);
        } else {
          resolve(userNumInput);
        }
      });
    });
  }
  //결과 받기
  result(carName, tryNum) {
    console.log("실행 결과");
    // 총 tryNum만큼 실행
    for (i = 0; i < tryNum; i++) {
      oneResult(carName);
    }
    //가장 긴 자동차 이름 return하기
    const maxLong = Math.max.apply(null, goCount);
    console.log(`최종 우승자 : ${maxLong}`);
  }
  oneResult(carName) {
    //전진한 횟수 저장하는 변수
    var goCount = [];
    for (i = 0; i < carName.length(); i++) {
      goCount.push(0);
    }
    for (i = 0; i < carName.length(); i++) {
      //랜덤한 숫자 불러오기
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        goCount[i] += 1;
        console.log(`${carName[i]} + : + ${goCount[i] * "-"}`);
      }
    }
    return goCount;
  }
}

export default App;
