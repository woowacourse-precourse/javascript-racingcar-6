import { Console } from "@woowacourse/mission-utils";

export default async function inputCarNames() {
  const carInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  let carNames = [];
  if (typeof carInput === "string") {
    carNames = carInput.split(",");
  } else {
    throw new Error("[ERROR] : 문자만 입력해 주세요.");
  }

  return carNames;
}
