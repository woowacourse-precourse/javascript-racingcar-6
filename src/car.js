import { MissionUtils } from "@woowacourse/mission-utils";

export async function inputCars() {
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
    throw new Error("[ERROR] 특수문자를 제외한 5글자 이내를 입력하세요.");
  }
}
