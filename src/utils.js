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

export const validateCarNames = (carNameArray) => {
  if (carNameArray.length === 1) {
    throw new Error('[ERROR] 자동차 이름은 최소 2개 이상 입력되어야 합니다.');
  }

  for (const name of carNameArray) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하이어야 합니다.');
    }
  }

  return true;
};
