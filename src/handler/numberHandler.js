import { MissionUtils } from "@woowacourse/mission-utils";

const validTryNumber = (input) => {
  const trimInput = input.trim();
  const NUMBER = Number(trimInput);
  if (trimInput === "")
    throw new Error("[ERROR] 시도 횟수를 입력하지 않으셨습니다.");
  if (Number.isNaN(NUMBER))
    throw new Error("[ERROR] 시도 횟수는 숫자 값만 입력해주세요.");
  if (NUMBER < 1) throw new Error("[ERROR] 시도 횟수는 1 이상이어야 합니다.");
  if (NUMBER > 100)
    throw new Error("[ERROR] 시도 횟수는 100 미만이어야 합니다.");
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
