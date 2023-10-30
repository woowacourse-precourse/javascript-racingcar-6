import { MissionUtils } from "@woowacourse/mission-utils";

export const randomNumber = () => {
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
  let number = randomNumber();
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
  console.log(carsArr);
  return carsArr;
};

export const positionHandleIterator = (carsArr, round) => {
  for (let i = 0; i < round; i++) {
    positionHandler(carsArr);
  }
  return carsArr;
};

