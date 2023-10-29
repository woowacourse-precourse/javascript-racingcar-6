import { MissionUtils } from "@woowacourse/mission-utils";

export async function carGenerate() {
  const userInputCars = await MissionUtils.Console.readLineAsync("");
  const carsList = userInputCars.split(",");

  const spaceIsValid = carsList.every((name) => !name.includes(" "));
  const charValid = carsList.every((name) =>
    /^[a-zA-Z가-힣]+$/.test(name.trim())
  );
  const carLengthIsValid = carsList.every(
    (nameLength) =>
      nameLength.trim().length <= 5 && nameLength.trim().length > 0
  );
  if (carLengthIsValid && spaceIsValid && charValid) {
    return carsList.map((name) => name.trim());
  } else {
    throw new Error(
      "[ERROR] 영어, 한글 알파벳 5글자 이내의 이름을 정확히 입력하세요."
    );
  }
}
