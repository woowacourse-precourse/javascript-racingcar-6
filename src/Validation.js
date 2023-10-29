/* eslint-disable import/extensions */
// export default function nameOverFive(splitCar) {
//   const SET_COLLECTION = new Set(splitCar);
//   if (splitCar.some((name) => name.length > 5)) {
//     return true;
//   }
//   if (SET_COLLECTION.size < splitCar.length) {
//     return true;
//   }
//   return false;
// }

const VALIDATION = {
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
};

export default VALIDATION;
