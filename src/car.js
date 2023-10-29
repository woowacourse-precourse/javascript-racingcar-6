import { MissionUtils } from "@woowacourse/mission-utils";

export async function carGenerate() {
  const userInputCars = await MissionUtils.Console.readLineAsync("");
  const carsList = userInputCars.split(",");

  const carLengthIsValid = carsList.every(
    (nameLength) => nameLength.length <= 5 && nameLength.length > 0
  );
  if (carLengthIsValid) {
    return carsList;
  }
  if (!carLengthIsValid) {
    throw new Error("[ERROR] 5글자 이내의 이름을 입력하세요.");
  }
}
