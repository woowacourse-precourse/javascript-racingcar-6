import { MissionUtils } from "@woowacourse/mission-utils";

export async function roundValidate(round) {
  const numTest = round;
  if (/[^1-9]$/.test(numTest)) {
    throw new Error("[ERROR] 잘못된 값을 입력하였습니다.");
  }
}
