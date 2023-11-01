import { MissionUtils } from "@woowacourse/mission-utils";

async function getNameInput() {
  MissionUtils.Console.print(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );
  const inputNames = await MissionUtils.Console.readLineAsync("");
  const namesArray = inputNames.split(",");
  const carArray = [];
  if (namesArray.length === 1) {
    throw new Error("[ERROR] 자동차 이름을 두 개 이상 입력하세요");
  }
  namesArray.forEach((e) => {
    if (e.length > 5) {
      throw new Error("[ERROR] 자동차 이름이 너무 깁니다.");
    }
    carArray.push([e, 0]);
  });
  return carArray;
}

export default getNameInput;
