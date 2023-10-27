import { Console } from "@woowacourse/mission-utils";
import { Random } from "@woowacourse/mission-utils";

async function inputCar() {
  let carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return carNames.split(",").map((value) => [value, 0]);
}
class App {
  async play() {
    let car = await inputCar();
  }
}
export default App;
