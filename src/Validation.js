const isLessThanFive = (list) => {
  if (list.some((carName) => carName.length > 5)) {
    throw new Error('[ERROR] 이름은 5글자를 넘어선 안됩니다.');
  }
}

const isDuplicated = (list) => {
  if (new Set(list).size !== list.length) {
    throw new Error('[ERROR] 중복된 이름이 있습니다.');
  }
}

export const checkValidCarsName = (list) => {
  isDuplicated(list);
  isLessThanFive(list);
}

export const checkValidNumber = (num) => {
  if (isNaN(num) || num <= '0') {
    throw new Error('[ERROR] 유효하지 않은 숫자 입니다.');
  }
}