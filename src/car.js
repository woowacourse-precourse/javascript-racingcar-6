import { MissionUtils } from "@woowacourse/mission-utils";

export async function carGenerate() {
  const userInputCars = await MissionUtils.Console.readLineAsync("입력: ");
  const carsList = userInputCars.split(",");

  return carsList;
}
