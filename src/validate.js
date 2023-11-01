const ERROR_TAG = '[ERROR]';
const ERROR = {
    nonValidNameLength: `${ERROR_TAG} 자동차 이름은 1자 이상, 5자 이하만 가능합니다.`,
    nonValidNamesNumber: `${ERROR_TAG} 자동차 이름은 2개 이상 입력해야 합니다.`,
    nameDuplicate: `${ERROR_TAG} 자동차 이름은 중복될 수 없습니다.`,
    nonValidNameType: `${ERROR_TAG} 자동차 이름에 특수문자가 포함될 수 없습니다.`,

    nonValidCountType: `${ERROR_TAG} 숫자만 입력 가능합니다.`,
    nonValidCountRange: `${ERROR_TAG} 1 이상의 숫자만 입력 가능합니다.`,
};

function validateCarName(names) {
    validateNamesNumber(names);

    names.forEach((carName) => {
        validateNameLength(carName);
        validateNameType(carName);
    });
    
    validateDuplicateName(names);
}

function validateRoundCount(count) {
    validateRangeCount(count);
    validateTypeCount(count);
}

function validateNameLength(name) {
    if (name.length < 1 || name.length > 5) {
        throw new Error(ERROR.nonValidNameLength);
    }
}

function validateNamesNumber(names) {
    if (names.length < 2) {
        throw new Error(ERROR.nonValidNamesNumber);
    }
}

function validateDuplicateName(names) {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error(ERROR.nameDuplicate);
  }
}

function validateNameType(name) {
    const specialCharacterRegExp = /[^ㄱ-ㅎ가-힣a-zA-Z0-9]/;
    if (specialCharacterRegExp.test(name)) {
        throw new Error(ERROR.nonValidNameType);
    }
}

function validateTypeCount(count) {
    const numberRegExp = /^[0-9]+$/;
    if (!numberRegExp.test(count)) {
        throw new Error(ERROR.nonValidCountType);
    }
}

function validateRangeCount(count) {
    if (count < 1) {
        throw new Error(ERROR.nonValidCountRange);
    }
}

export { validateCarName, validateRoundCount };