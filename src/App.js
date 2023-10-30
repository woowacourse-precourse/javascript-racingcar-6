import { MissionUtils } from "@woowacourse/mission-utils";

const Console = MissionUtils.Console;
const Random = MissionUtils.Random;

class App {
  constructor() {
    this.carName;
    this.carMoveArray = [];
    this.winnerCarArray = [];
    this.winnerLength;
    this.gameRound;
  }

  async carNameInput() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    try {
      this.carNameValidation(userInput);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
    this.carName = userInput.split(",");
    return userInput.split(",");
  }

  carNameValidation(userInput) {
    const carNames = userInput.split(",");
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 5글자 이내로 입력해주세요.");
      }
    });
  }

  async gameNumberInput() {
    const userInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    try {
      this.gameNumberValidation(userInput);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
    this.gameRound = userInput;
    return this.gameRound;
  }

  gameNumberValidation(userInput) {
    if (!+userInput) {
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  }

  carMoveText() {
    for(let i = 0; i < this.carName.length; i++) {
      const randomNumber = Random.pickNumberInRange(0, 9);
      this.carMoveArray[i] += this.carMoveQualification(randomNumber);
      Console.print(this.carName[i] + " : " + this.carMoveArray[i]);
    }
  }

  carMoveEmptyArray() {
    for(let i = 0; i < this.carName.length; i++) {
      this.carMoveArray.push("");
    }
  }

  carMoveQualification(randomNumber) {
    if(randomNumber >= 4) {
      return "-";
    }else {
      return "";
    }
  }

  winnerMovelength() {
    const sortMoveArray = [...this.carMoveArray].sort((a, b) => b.length - a.length);
    this.winnerLength = sortMoveArray[0].length;
    return this.winnerLength;
  }

  getWinnerArray() {
    this.carMoveArray.forEach((carMove, index) => {
      this.winnerCar(carMove, index);
    });
  }

  winnerCar(carMove, index) {
    if(carMove.length === this.winnerLength) {
      this.winnerCarArray.push(this.carName[index]);
    }
  }

  resultText() {
    const winnerCarNames = this.winnerCarArray.join(",");
    Console.print("최종 우승자 : " + winnerCarNames);
  }

  async play() {
  }
}

export default App;
