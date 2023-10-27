import { MissionUtils } from '@woowacourse/mission-utils';

export const generateRandomNumber = (min, max) => {
  return MissionUtils.Random.pickNumberInRange(min, max);
};

export const removeSpaces = (carNames) => {
  const carNameArray = carNames.split(',');

  for (let i = 0; i < carNameArray.length; i++) {
    const trimmedName = carNameArray[i].trim();

    carNameArray[i] = trimmedName;
  }

  return carNameArray;
};
