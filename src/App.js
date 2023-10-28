import { Console } from "@woowacourse/mission-utils";

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

  async play() {
    this.inputCarList();
  }
}

export default App;

const game = new App();
game.play();
