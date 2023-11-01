import { Random } from '@woowacourse/mission-utils';

export const checkIsCarMove = (number) => {
  const condition = number >= 4;
  return condition;
};

export const moveCarsByDistance = (carDataList, distanceList) => {
  const newDataList = carDataList.map((carDataObj, i) => {
    const newObj = { ...carDataObj };
    newObj.distance += distanceList[i];
    return newObj;
  });
  return newDataList;
};

const generateRandomNumber = () => {
  Random.pickNumberInRange(0, 9);
};

const calcDistance = (randomNumber) => {
  const isCarMove = checkIsCarMove(randomNumber);
  if (isCarMove) {
    return 1;
  }
  return 0;
};

const moveCarRandomly = (carDataList) => {
  const randomNumberList = carDataList.map(generateRandomNumber);
  const distanceList = randomNumberList.map(calcDistance);
  const updatedCarDataList = moveCarsByDistance(carDataList, distanceList);
  return updatedCarDataList;
};
export default moveCarRandomly;
