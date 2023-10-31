import { MissionUtils } from "@woowacourse/mission-utils";
import GameMessage from "../Message/gameMessage.js";

function checkCarNameEmpty(carNames) {
  if (carNames.length === 0) {
    throw new Error(GameMessage.ERROR.CAR_NOT_INPUTED);
  }
  return false;
}

async function checkCarNames(carNames) {
  const carList = carNames.split(",").map((name) => name.trim());

  await carList.forEach((element) => {
    if (element.length > 5 || element.length <= 0) {
      throw new Error(GameMessage.ERROR.CAR_NAME_INVALID);
      //throw new Error(element);
    }
  });

  const carNameSet = await new Set(carList);
  if (carNameSet.size !== carList.length) {
    throw new Error(GameMessage.ERROR.CAR_NAME_DUPLICATED);
  }

  return carList;
}

async function InputCarName() {
  const carInput = await MissionUtils.Console.readLineAsync(GameMessage.INPUT_CAR_NAME);

  if (checkCarNameEmpty(carInput) === false) {
    return await checkCarNames(carInput);
  }

  return false;
}

export default InputCarName;
