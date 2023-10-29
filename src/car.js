import { MissionUtils } from "@woowacourse/mission-utils";

export async function carGenerate() {
  const userInputCars = await MissionUtils.Console.readLineAsync("");
  const carsList = userInputCars.split(",");

  const spaceIsValid = carsList.every((name) => !name.includes(" "));
  const carLengthIsValid = carsList.every(
    (nameLength) => nameLength.length <= 5 && nameLength.length > 0
  );
  if (carLengthIsValid && spaceIsValid) {
    return carsList;
  }
  if (!carLengthIsValid || !spaceIsValid) {
    throw new Error("[ERROR] 5글자 이내의 이름을 정확히 입력하세요.");
  }
}
