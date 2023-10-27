import { Console } from "@woowacourse/mission-utils";

import Car from "./Car.js";

class App {
  async play() {
    const userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = userInput.split(",");
    cars.forEach((car) => {
      car = new Car(car);
      car.printPosition();
    });
  }
}

(() => {
  const app = new App();
  app.play();
})();
export default App;
