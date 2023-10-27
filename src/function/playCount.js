import { Console } from "@woowacourse/mission-utils";

export const playCount = async () => {
  const userInputValue = await Console.readLineAsync("시도할 횟수");

  if (isNaN(userInputValue)) {
    throw new Error("[ERROR] 잘못된 입력입니다. 숫자를 입력해주세요");
  }

  return Number(userInputValue);
};
