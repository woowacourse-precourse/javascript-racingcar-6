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
    validateCarNames(carNames);

    return carNames;
  }

  async inputTryNum() {
    const tryNum = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    validateTryNum(tryNum);
    return tryNum;
  }
}

const validateCarNames = (carNames) => {
  carNames.forEach((carName, idx) => {
    if (carNames.indexOf(carName) !== idx) {
      throw new Error("[ERROR] 중복된 자동차 이름");
    }
  });
};

const validateCarName = (carName) => {
  if (carName.length <= 0) {
    throw new Error("[ERROR] 차 이름이 입력되지 않았습니다.");
  }
  if (carName.length > 5) {
    throw new Error("[ERROR] 차 이름은 5글자 이하여야 합니다.");
  }
  return;
};

const validateTryNum = (tryNum) => {
  const DIGIT_CHECK = /^[0-9]+$/;
  if (!DIGIT_CHECK.test(tryNum)) {
    throw new Error("[ERROR] 숫자가 아닌 다른 문자가 입력되었습니다.");
  }
  return;
};
