import { Console } from "@woowacourse/mission-utils";
export default async function inputCount() {
  let count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
  count = Number(count);

  if (Object.is(count, NaN)) {
    throw new Error("[ERROR] : 숫자를 입력해주세요.");
  }

  return count;
}
