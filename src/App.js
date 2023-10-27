import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async play() {
    this.gameStart();
  }

  async gameStart() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const input = await Console.readLineAsync("");
    const carArr = input.split(",");
    Console.print(carArr);
    this.checkInputValidity(carArr);
  }

  checkInputValidity(carArr) {
    carArr.map((car) => {
      if (car.length > 5) {
        throw new Error("숫자가 잘못된 형식입니다. 5자 이하만 가능합니다.");
      }
    });
    this.inputTrialNum();
  }

  async inputTrialNum() {
    Console.print("시도할 횟수는 몇 회인가요?");
    const input = await Console.readLineAsync("");

    if (Number(isNaN(input))) {
      throw new Error("숫자가 아닙니다.");
    } else {
      Console.print(input);
    }
  }
}

export default App;
