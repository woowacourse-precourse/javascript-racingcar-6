import { MissionUtils } from "@woowacourse/mission-utils";

const validTryNumber = (input) => {
  const trimInput = input.trim();
  if (trimInput === "")
    throw new Error("[ERROR] 시도 횟수를 입력하지 않으셨습니다.");
  if (Number.isNaN(Number(trimInput)))
    throw new Error("[ERROR] 시도 횟수는 숫자 값만 입력해주세요.");
};

const numberHandler = {
  readTryNumber: async () => {
    const INPUT =
      await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    validTryNumber(INPUT);
    return Number(INPUT);
  },
};

export default numberHandler;
