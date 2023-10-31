import Validation from "./Validation";
import CarRacingGame from "./CarRacingGame";
import Car from "./Car";

class App {
  /**@constructor */
  constructor() {
    /**@type {CarRacingGame} */
    this.carRacingGame = new CarRacingGame();
  }
  async play() {
    await this.readCarNames();
  }

  async readCarNames() {
    const answer = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = answer.split(",");
    cars.forEach((car) => {
      Validation.validationCarName(car);
    });
    Validation.validationDuplicateCarName(cars);
    this.carRacingGame.setCars(cars.map((car) => new Car(car)));
  }
}

export default App;
