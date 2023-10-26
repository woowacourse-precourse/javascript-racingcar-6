import checkCarNames from "./checkCarNames";
import inputCarNames from "./inputCarNames";

class App {
  async play() {
    const carNames = inputCarNames();

    carNames.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] : 자동차 이름은 5자 이하만 입력 가능합니다.");
      }
    });
  }
}

export default App;
