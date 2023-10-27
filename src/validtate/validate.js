export function validateCountNumber(moveCount) {
  const inputValueNumber = Number(moveCount);
  if (inputValueNumber % 1 !== 0) {
    throw new Error('[ERROR] 정수를 입력해주세요.');
  }

  if (inputValueNumber < 0) {
    throw new Error('[ERROR] 음수를 입력할 수 없습니다');
  }

  if (typeof inputValueNumber !== 'number') {
    throw new Error('[ERROR] 숫자를 입력해주세요.');
  }

  if (inputValueNumber === 0) {
    throw new Error('[ERROR] 1이상의 숫자를 입력해주세요.');
  }

  if (inputValueNumber === '') {
    throw new Error('[ERROR] 횟수를 비워둘 수 없습니다.');
  }
}

export function validateCarName(carName) {
  if (carName === '') {
    throw new Error('[ERROR] car 이름은 비워 둘 수 없습니다.');
  }

  if (carName.length > 5) {
    throw new Error('[ERROR] car 이름은 5자 이하만 가능합니다.');
  }
}

export function hasDuplicate(list) {
  const set = new Set(list);
  return set.size < list.length;
}
