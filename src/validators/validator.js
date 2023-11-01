import MESSEGE from '../constants/messeges.js';

export const validateCarNumber = carArray => {
  if (carArray.length < 2) {
    throw new Error(MESSEGE.errorCarNumber);
  }
  return true;
};

export const validateCarName = carArray => {
  const carNameSet = new Set(carArray);
  if (carArray.length !== carNameSet.size) {
    throw new Error(MESSEGE.errorDuplicatedCarName);
  }
  if (carArray.find(carName => carName.length >= 5)) {
    throw new Error(MESSEGE.errorCarName);
  }
  carArray.forEach(carName => {
    if (carName === '') {
      throw new Error(MESSEGE.errorCarName);
    }
  });
  return true;
};

export const validateRoundNum = roundNum => {
  const round = Number(roundNum);
  if (isNaN(round)) {
    throw new Error(MESSEGE.errorRoundNumIsNumber);
  }
  if (round <= 0 || round > 9) {
    throw new Error(MESSEGE.errorRoundNumIsInteger);
  }
  return true;
};
