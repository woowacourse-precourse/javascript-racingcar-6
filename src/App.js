import { Console } from "@woowacourse/mission-utils";

const MIN_COUNT_ERROR_MESSAGE =
  "[ERROR] 두 개 이상의 자동차 이름을 입력해주세요.";
const NAME_LENGTH_ERROR_MESSAGE =
  "[ERROR] 이름이 잘못된 형식입니다. 자동차의 이름은 5글자 이하의 이름으로 입력하세요.";

class App {
  async play() {
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    CarNamesValidation(carNames);
  }
}

function CarNamesValidation(carNames) {
  const carNamesArray = carNames.split(",");

  if (carNamesArray.length < 2) {
    throw new Error(MIN_COUNT_ERROR_MESSAGE);
  }

  carNamesArray.forEach((carName) => {
    if (carName.trim().length > 5) {
      throw new Error(NAME_LENGTH_ERROR_MESSAGE);
    }
  });
}

export default App;
