import { Random, Console } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.carNames = [];
    this.carMoveCounts = [];
    this.carNumber;
    this.maxMoveCounts = 0;
    this.playCount;
  }
  
  async play() {
    await this.userInput();

    this.initCarMoveCounts();

    Console.print("실행 결과");
    for (let i=0; i<this.playCount; i++) {
      this.moveCars();
      this.printProgress();
    }

    this.printWinner();
  }

  async userInput() {
    this.carNames = (await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)")).split(",");
    this.carNumber = this.carNames.length;
    
    for (let i=0; i<this.carNumber; i++) {
      if (this.carNames[i].length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.")
      }
    }
    
    this.playCount = (await Console.readLineAsync("시도할 횟수는 몇 회인가요?"));
    if (isNaN(this.playCount)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.")
    }
    
    this.playCount = Number(this.playCount);
  }

  isCarMovable() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) { return true; }
    else { return false; }
  }

  initCarMoveCounts() {
    this.carMoveCounts.length = this.carNumber;
    this.carMoveCounts.fill(0);
  }

  moveCars() {
    for (let i=0; i<this.carNumber; i++) {
      if (this.isCarMovable()) {
        this.carMoveCounts[i] += 1;
        
        if (this.carMoveCounts[i] > this.maxMoveCounts) {
          this.maxMoveCounts = this.carMoveCounts[i];
        }
      }
    }
  }

  printProgress() {
    for (let i=0; i<this.carNumber; i++) {
      const progressString = this.carNames[i] + " : ";

      for (let j=0; j<this.carMoveCounts[i]; j++) {
        progressString += "-";
      }

      Console.print(progressString);
    }
    Console.print("");
  }

  printWinner() {
    const winnerString = "최종 우승자 : ";
    let winnerArray = [];

    for (let i=0; i<this.carNumber; i++) {
      if (this.carMoveCounts[i] == this.maxMoveCounts) {
        winnerArray.push(this.carNames[i]);
      }
    }

    winnerString += winnerArray.join(",");
    Console.print(winnerString);
  }

}

export default App;
