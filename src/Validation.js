const VALIDATION = {
  // 조건문 결과가 false여야 검사를 통과.
  nameOverFive(splitCar) {
    if (splitCar.some((name) => name.length > 5)) {
      return true;
    }
    return false;
  },

  isDuplicate(splitCar) {
    if (new Set(splitCar).size < splitCar.length) {
      return true;
    }
    return false;
  },

  inputNothing(splitCar) {
    const isEmpty = (input) => {
      if (
        typeof input === 'undefined' ||
        input === null ||
        input === '' ||
        input === 'null' ||
        input.length === 0 ||
        (typeof input === 'object' && !Object.keys(input).length)
      ) {
        return true;
      }
      return false;
    };
    if (splitCar.some((empty) => isEmpty(empty))) {
      // true면 empty
      return true;
    }
    return false;
  },

  isSpacing(splitCar) {
    if (splitCar.some((spacing) => spacing.includes(' ') === true)) {
      return true;
    }
    return false;
  },

  isNum(tryNum) {
    if (Number.isNaN(tryNum) || tryNum <= 0) {
      return true;
    }
    return false;
  },
};

export default VALIDATION;
