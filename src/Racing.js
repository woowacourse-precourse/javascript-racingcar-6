import { MissionUtils } from "@woowacourse/mission-utils";

export const randomNumberSelector = () => {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  return number;
};

const overFour = (number) => {
  return number >= 4;
};

const underFour = (number) => {
  return number < 4;
};

export const checkMoving = () => {
  let number = randomNumberSelector();
  let isMoving = false;
  if (overFour(number)) {
    return (isMoving = true);
  }
  if (underFour(number)) {
    return (isMoving = false);
  }
};

export const positionHandler = (carsArr) => {
  carsArr.forEach((carsInfo) => {
    let position = carsInfo.position;
    let isMoving = checkMoving();
    if (isMoving) {
      position += 1;
    }
    carsInfo.position = position;
  });
  return carsArr;
};

export const positionHandleIterator = (carsArr, round) => {
  for (let i = 1; i <= round; i++) {
    positionHandler(carsArr);
    racingResultPrint(carsArr);
    MissionUtils.Console.print("\n");
  }
  return carsArr;
};

export const racingResultPrint = (carsArr) => {
  carsArr.forEach((carsInfo) => {
    let position = carsInfo.position;
    let movingDistance = "";
    for (let i = 0; i < position; i++) {
      movingDistance += "-";
    }
    const resultMessage = `${carsInfo.name} : ${movingDistance}`;
    return MissionUtils.Console.print(resultMessage);
  });
};
