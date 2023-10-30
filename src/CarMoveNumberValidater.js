import { MissionUtils } from "@woowacourse/mission-utils";

export async function carMoveNumberValidater() {
  MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
  const tryNumber = await MissionUtils.Console.readLineAsync('');
  const validatedTryNumber = validationTryNumber(tryNumber);
  return validatedTryNumber;
}
  
function validationTryNumber(number) {
  if (/^[+]?[1-9]\d*$/.test(number)) {
    return Number(number);
  } else {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}