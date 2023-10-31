const utils = {
  isOverLength: (val, length) => val.length > length,
  isStringNumber: str => {
    const numberRegExp = /[0-9]/g;
    return numberRegExp.test(str);
  },
  isNumberExcludeZero: str => {
    const numberRegExp = /^[1-9]\d*$/g;
    return numberRegExp.test(str);
  },
  isSmallLetter: str => {
    const smallLetterRegExp = /[a-z]/g;
    return smallLetterRegExp.test(str);
  },
  isValidCarName: str => {
    const carNameRegExp = /^[a-z][a-z0-9]+$/g;
    return carNameRegExp.test(str);
  },
  isCarListSeparate: str => {
    const carListSepareteRegExp =
      /^([a-z][a-z0-9]{1,5}(,[a-z][a-z0-9]{1,5})+)$/g;
    return carListSepareteRegExp.test(str);
  },
};

export default utils;
