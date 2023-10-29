import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const cars = await this.getCarName();
    const moveCount = await this.getMoveCount();
  }

  async getCarName() {
    const cars = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
    );
    const carArray = cars.split(",");
    if (this.validationCarName(carArray)) {
      return carArray;
    } else {
      throw Error("[ERROR] 에러");
    }
  }

  validationCarName(carArray) {
    carArray.forEach((car) => {
      if (car.length > 5) {
        Console.print("에러 (5자 이하로 해야돼)");
        return false;
      }
    });
    return true;
  }

  async getMoveCount() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default App;
