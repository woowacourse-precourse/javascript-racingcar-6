import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../Message/gameMessage.js";

async function InputCarName() {
  const carInput = await MissionUtils.Console.readLineAsync(GameMessage.INPUT_CAR_NAME);

  if (checkCarNameEmpty(carInput) === false) {
    return await checkCarNames(carInput);
  }

  return false;
}

function checkCarNameEmpty(carNames) {
  if (carNames.length === 0) {
    throw new Error(GameMessage.ERROR.CAR_NOT_INPUTED);
  }
  return false;
}

function divideCarNames(carNames) {
  if (carNames.includes(",")) {
    return carNames.split(",");
  }

  return [carNames];
}

function checkCarNames(carNames) {
  const carList = divideCarNames(carNames);
  carList.forEach((element) => {
    if (element.length > 5 || element.length <= 0) {
      throw new Error(GameMessage.ERROR.CAR_NAME_INVALID);
    }
  });

  const carNameSet = new Set(carList);
  if (carNameSet.size !== carList.length) {
    throw new Error(GameMessage.ERROR.CAR_NAME_DUPLICATED);
  }

  return carList;
}

export default InputCarName;
