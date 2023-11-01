import { MissionUtils } from "@woowacourse/mission-utils";
import { racingProgress } from "./outputView";
import {
  userInputDuplicatedError,
  userInputCarNameFormEror,
  userInputTryNumberError,
} from "./Error.js";
import { TEXT } from "../contants/contants";

export const getCarName = async () => {
  let carNameArray = [];
  const CAR_NAME = await MissionUtils.Console.readLineAsync(TEXT.GET_CAR_NAMES);
  userInputCarNameFormEror(CAR_NAME);
  CAR_NAME_ARRAY = stringToArray(CAR_NAME);
  userInputDuplicatedError(CAR_NAME_ARRAY);
  await getTryNumber(CAR_NAME_ARRAY);
};
