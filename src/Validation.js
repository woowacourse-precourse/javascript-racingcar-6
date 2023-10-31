import { carMessages, tryMessage } from './Messages.js';

export const carValidate = (cars) => {
  // 차 중복 체크
  const carSet = new Set(cars);
  if (carSet.size !== cars.length) {
    throw new Error(carMessages.ERROR_DUPLICATE);
  }
  // 차 이름 길이 체크
  cars.forEach((element) => {
    if (element.length > 5) {
      throw new Error(carMessages.ERROR_FIVE_CHARACTERS);
    }

    if (element.trim() === '') {
      throw new Error(carMessages.ERROR_BLANK_NAME);
    }
  });
};

export const tryValidate = (tryCount) => {
  if (Number.isNaN(Number(tryCount))) {
    throw new Error(tryMessage.ERROR_INPUT_TRY);
  }
  if (tryCount.trim() === '') {
    throw new Error(tryMessage.ERROR_INPUT_TRY);
  }

  const tryCountNumber = Number(tryCount);
  if (tryCountNumber === 0) {
    throw new Error(tryMessage.ERROR_INPUT_TRY);
  }

  if (tryCountNumber < 0) {
    throw new Error(tryMessage.ERROR_INPUT_TRY);
  }

  if (tryCountNumber % 1 !== 0) {
    throw new Error(tryMessage.ERROR_INPUT_TRY);
  }
};
