import { CAR_NAME_ROLE } from '../contants/racingGame.js';

export const validator = Object.freeze({
  isEmptyString(input) {
    return input.length === 0;
  },
  isValidCarName(carName) {
    return carName.length >= CAR_NAME_ROLE.minLengh && carName.length <= CAR_NAME_ROLE.maxLengh;
  },
  isDuplicatedCarName(carList) {
    const carListSet = new Set(carList);
    return carList.length !== carListSet.size;
  },
});
