function isEveryCarNamesUnique(carNamesArray) {
  const carNamesSet = new Set(carNamesArray);

  return carNamesSet.size === carNamesArray.length;
}

function isAlphabetOrInteger(carName) {
  return /^[a-zA-Z0-9]+$/.test(carName);
}

function isValidCarNames(carNamesString) {
  const carNamesArray = carNamesString.split(',');

  for (const carName of carNamesArray) {
    if (!isAlphabetOrInteger(carName)) {
      throw new Error(
        '[ERROR] 자동차 이름은 알파벳과 숫자로만 구성되어야 합니다.'
      );
    }

    if (carName.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하로 설정되어야 합니다.');
  }

  if (!isEveryCarNamesUnique(carNamesArray)) {
    throw new Error('[ERROR] 중복된 자동차 이름이 존재합니다.');
  }

  return true;
}

function isValidMoveChanceCount(moveChanceCountString) {
  const moveChanceCountNumber = Number(moveChanceCountString);

  if (isNaN(moveChanceCountNumber)) {
    throw new Error('[ERROR] 시도 횟수는 유효한 숫자로 설정되어야 합니다.');
  }

  if (Number.isInteger(moveChanceCountNumber) === false) {
    throw new Error('[ERROR] 시도 횟수는 정수로 설정되어야 합니다.');
  }

  if (moveChanceCountNumber < 0) {
    throw new Error('[ERROR] 시도 횟수는 0 이상의 정수로 설정되어야 합니다.');
  }

  return true;
}

export { isValidCarNames, isValidMoveChanceCount };
