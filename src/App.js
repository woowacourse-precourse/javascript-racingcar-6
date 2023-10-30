import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const enterCarName = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );

    const carName = enterCarName.split(",");

    const verifyNameLength = carName.map((i) => i.length > 5);

    if (verifyNameLength.includes(true) === true) {
      throw new Error(
        "[ERROR] 입력한 이름이 5자를 초과하였습니다. 게임을 다시 시작해주세요."
      );
    }

    const numberOfRounds = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );

    const verifyNumber = /^[0-9]+$/;

    if (verifyNumber.test(numberOfRounds) === false) {
      MissionUtils.Console.print(
        "게임 횟수에는 숫자만 입력할 수 있습니다. 다시 입력해주세요."
      );
    }

    let curScore = this.forwardCar(carName);

    MissionUtils.Console.print(`${this.viewCarInfo(carName, curScore)} \n`);

    for (let i = 0; i < numberOfRounds - 1; i++) {
      const roundScore = this.forwardCar(carName);
      curScore = roundScore.map((ele, index) => ele + curScore[index]);
      MissionUtils.Console.print(`${this.viewCarInfo(carName, curScore)} \n`);
    }

    let highScore = 0;

    for (let i = 0; i < carName.length; i++) {
      if (curScore[i].length > highScore) {
        highScore = curScore[i].length;
      }
    }

    let winner = curScore
      .map((score, i) => {
        if (score.length === highScore) {
          return carName[i];
        }
      })
      .filter((ele) => ele);

    MissionUtils.Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }

  viewCarInfo(carName, curScore) {
    let curCarInfo = [];

    for (let i = 0; i < curScore.length; i++) {
      curCarInfo.push(`${carName[i]} : ${curScore[i]}`);
    }
    return curCarInfo;
  }

  forwardCar(carName) {
    let score = new Array(carName.length).fill("");

    for (let i = 0; i < carName.length; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) {
        score[i] += "-";
      }
    }
    return score;
  }
}

export default App;
