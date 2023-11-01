function isIncludedValidRange(name) {
  return (name.length <= 0 || name.length > 5);
}

function isCharacterOnlyIncluded(name) {
  const regex = /^[\p{L}]{1,5}$/u;
  return regex.test(name);
}

function isOverlappedName(splitedNames) {
  const namesSet = new Set(splitedNames);
  return namesSet.size === splitedNames.length;
}

function isNotInteger(totalRound) {
  return !Number.isInteger(totalRound);
}

class Validator {
  /**
   * @param {string} carNames 
   * @returns {string[]}
   */
  static evaluateCarNames(carNames) {
    const splitedNames = carNames.split(',');
    if(!isOverlappedName) throw String('OVRELAPPED_NAME');
    splitedNames.forEach((name) => {
      if (isIncludedValidRange(name)) throw String('WRONG_RANGE_NAME');
      if (!isCharacterOnlyIncluded(name)) throw String('SPECIAL_CHARATER');
    });

    return splitedNames;
  }

  /**
   * @param {string} totalRound 
   * @returns {number}
   */
  static evaluateTotalRound(totalRound) {
    const numericTotalRound = parseInt(totalRound, 10);
    if (numericTotalRound < 0) throw String('UNDER_ZERO');
    if (isNotInteger(numericTotalRound)) throw String('NOT_NUMBER');
    return numericTotalRound;
  }
}

export default Validator;
