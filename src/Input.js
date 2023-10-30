import { Console } from "@woowacourse/mission-utils";

export default class Input {
  async inputCarName() {
    const carName = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const carNames = carName.split(",").map((v) => v.replaceAll(" ", ""));

    carNames.forEach((v) => {
      validateCarName(v);
    });

    return carNames;
  }
}

const validateCarName = (carName) => {
  if (carName.length <= 0) {
    throw new Error("[ERROR] 차 이름이 입력되지 않았습니다.");
  }
  if (carName.length > 5) {
    throw new Error("[ERROR] 차 이름은 5글자 이하여야 합니다.");
  }
  return;
};
