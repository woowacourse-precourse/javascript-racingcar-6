import { MissionUtils } from "@woowacourse/mission-utils";

export async function carNameSpliter() {
  MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
  const carName = await MissionUtils.Console.readLineAsync('');
  const carNameSplit = carName.split(',');
  return carNameSplit;
}