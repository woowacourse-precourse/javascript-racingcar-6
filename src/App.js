import { Console, Random } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.random = 0;
    this.carList = [];
    this.round = 0;
  }

  // 2. 경주할 자동차 이름 받기
  async inputCarList() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const inputArr = input.split(",");
    this.carList = [...inputArr];
    this.isValidateCar();
  }

  isValidateCar() {
    this.carList.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이하만 가능합니다.");
      } else {
        return true;
      }
    });
  }

  // 3. 몇 번의 이동을 할 것인지 입력 받기
  async inputRound() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    this.isValdiateRound(input);
  }

  isValdiateRound(round) {
    if (isNaN(+round)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    } else {
      this.round = +round;
      return;
    }
  }

  // 4. 각 차수별 실행 결과 계산 및 출력
  async race() {
    Console.print("실행 결과");

    // 자동차 별 진행 속도
    let racingArr = new Array(this.round).fill("");

    // 경주 실행
    for (let i = 0; i < this.round; i++) {
      for (let j = 0; j < this.carList.length; j++) {
        const random = Random.pickNumberInRange(0, 9);
        if (random >= 4) {
          racingArr[j] += "-";
        }
      }

      // 각 차수별 실행 결과 출력
      for (let k = 0; k < this.carList.length; k++) {
        Console.print(this.carList[k] + " : " + racingArr[k]);
      }

      // 각 차수 구분 공백
      Console.print("");
    }
  }

  async play() {
    await this.inputCarList();
    await this.inputRound();
    await this.race();
  }
}

export default App;

const game = new App();
game.play();
