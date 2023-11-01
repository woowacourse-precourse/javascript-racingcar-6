import Car from "./Car";
import checkGameCount from "./checkGameCount";
import checkCarName from "./checkCarName";

class GameStart {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  playRound = () => {
    this.cars.forEach((car) => {
      car.move();
    });
  };

  playGame = () => {
    Console.print("실행 결과");
    for (let i = 0; i < this.rounds; i++) {
      this.playRound();
    }
  };

  getGameCount = async () => {
    const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const parseCount = parseInt(count);
    if (!checkGameCount(parseCount)) {
      throw new Error("[ERROR] 숫자가 아닌 값이 입력되었습니다.");
    }

    this.rounds = parseCount;
  };

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
    await this.getGameCount();
    this.playGame();
  }
}

export default GameStart;
