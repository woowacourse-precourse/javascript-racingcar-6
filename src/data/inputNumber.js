/* 사용자의 수 입력과 입력값 확인을 위한 JS */
import { MissionUtils } from "@woowacourse/mission-utils";
import { TEXT } from "../comm/text.js";

export default async function inputNumber() {
  const number = await MissionUtils.Console.readLineAsync(
    `${TEXT.INPUT_NUMBER}`
  );
  const valudateNumber = inputNumberValidate(number);
  return valudateNumber;
}

const inputNumberValidate = (inputNumber) => {
  if (isNaN(inputNumber)) throw Error(`${TEXT.INPUT_ERROR}`);
  return inputNumber;
};
