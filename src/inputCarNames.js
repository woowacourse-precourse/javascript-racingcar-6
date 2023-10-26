import { MissionUtils } from "@woowacourse/mission-utils";

export default function inputCarNames() {
  const carInput = MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  let carList = [];
  if (typeof carInput === "string") {
    carList = carInput.split(",");
  } else {
    throw new Error("[ERROR] : 문자만 입력해 주세요.");
  }

  return carList;
}
