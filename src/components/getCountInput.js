import { MissionUtils } from "@woowacourse/mission-utils";

async function getCountInput() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
  const inputCount = await MissionUtils.Console.readLineAsync("");
  return inputCount;
}

export default getCountInput;
