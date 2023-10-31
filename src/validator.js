import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const validateCarNumber = (carArray) => {
  if (carArray.length < 2) {
    throw new Error("[ERROR] 자동차 2대 이상부터 경주를 할 수 있습니다.");
  }
  return true;
};

export const validateCarName = (carArray) => {
  if (carArray.find((carName) => carName.length >= 5)) {
    throw new Error(
      "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다."
    );
  }
  carArray.forEach((carName) => {
    if (carName === "") {
      throw new Error(
        "[ERROR] 자동차의 이름은 쉼표(,)로 구분하며 5자 이하만 가능합니다."
      );
    }
  });
  return true;
};

export const validateRoundNum = (roundNum) => {
  let round = Number(roundNum);
  MissionUtils, Console.print(round);
  if (isNaN(round)) {
    throw new Error("[ERROR] 시도할 횟수는 숫자여야 합니다.");
  }
  if (round <= 0 || round > 9) {
    throw new Error("[ERROR] 시도할 횟수는 1~9 사이의 정수여야 합니다.");
  }
  return true;
};
