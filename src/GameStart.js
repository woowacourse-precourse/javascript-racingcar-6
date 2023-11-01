import Car from "./Car";
import checkCarName from "./checkCarName";
class GameStart {
  constructor() {
    this.cars = [];
  }
  getCarNames = async () => {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const splitCarNames = carNames.split(",");
    if (!checkCarName(splitCarNames)) {
      throw new Error("[ERROR] 자동차 이름이 잘못 입력되었습니다.");
    }
    this.cars = splitCarNames.map((name) => new Car(name));
  };

  async start() {
    await this.getCarNames();
  }
}

export default GameStart;
