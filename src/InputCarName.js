import { MissionUtils } from "@woowacourse/mission-utils";

export async function inputCarName(){
  const carNames = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)');
  return carNames;
}