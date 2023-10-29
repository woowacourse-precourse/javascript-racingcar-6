import { MissionUtils } from "@woowacourse/mission-utils";

export  const number = function () {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  return randomNumber;
}
export const realNumber = number()
console.log(realNumber);
console.log(typeof(realNumber));

export  const try_racing = function (number) {
  let bar;
  if (number > 4) bar = '-';
  return bar;
}
console.log(try_racing(realNumber))
