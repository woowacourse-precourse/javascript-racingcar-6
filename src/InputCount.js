import { MissionUtils } from "@woowacourse/mission-utils";

export async function inputCount(){
  const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
  return count;
}