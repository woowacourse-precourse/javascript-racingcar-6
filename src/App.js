import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE } from "./contants/message";
import { CONDITION } from "./contants/condition";

class App {
  async play() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
  }

  async setNumbers() {
    const NUMBERS = [];
  }
}

const checkCarNamesValid = (userInput) => {
  const input = userInput.split(",");

  const inputOverName = input.find((carName) => carName > 5);

  if (inputOverName) {
    throw new Error(`[ERROR] 입력이 올바른 형식이 아닙니다.`);
  }
  return input;
};

export default App;
