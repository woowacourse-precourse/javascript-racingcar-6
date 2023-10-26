/* 사용자의 수 입력과 입력값 확인을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../comm/text.js";

export default async function inputNames() {
  const names = await MissionUtils.Console.readLineAsync(`${TEXT.INPUT_NAMES}`);
  const valudateNames = inputNamesValidate(names);
  return valudateNames;
}

const inputNamesValidate = (inputNames) => {
  const names = inputNames.split(",");
  for (let name of names) {
    if (name.length > 5) throw Error(`${TEXT.INPUT_ERROR}`);
  }
  return inputNames;
};
