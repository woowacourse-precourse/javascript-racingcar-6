import { Console } from "@woowacourse/mission-utils";

export const playCount = async () => {
  const userInputValue = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?"
  );

  if (isNaN(userInputValue) || userInputValue <= 0) {
    throw new Error("[ERROR] 잘못된 입력입니다. 숫자를 입력해주세요");
  }

  return Number(userInputValue);
};
