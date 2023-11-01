import { Console, Random } from "@woowacourse/mission-utils";

export const carName = async () => {
  try {
    const CAR_NAME = Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    return CAR_NAME;
  } catch (e) {
    Console.print("[ERROR]");
  }
};

export const movingNumber = async () => {
  try {
    const MOVING_NUMBER = Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    return MOVING_NUMBER;
  } catch (e) {
    Console.print("[ERROR]");
  }
};
