
const CORRECT_LENGTH = 5;
const EMPTY_LENGTH = 0;
const LEAST_NAME_COUNTS = 2;
const LEAST_ROUND_NUMBER = 1;
const ALPHABETIC_REGULAR_EXPRESSION = /^[a-zA-Z]+$/;

const NAME_ERROR_MESSAGE = {
  empty_name: '[ERROR] 입력값에 이름을 적지 않았거나 공백을 적었습니다.',
  contains_number: '[ERROR] 입력값에 숫자가 포함되어 있습니다.',
  invalid_character: '[ERROR] 입력값에 쉼표와 알파벳을 제외한 문자가 들어있습니다.',
  length_error: '[ERROR] 입력한 이름의 길이가 5자를 넘어갑니다.',
  less_than_two_names: '[ERROR] 두 개 이상의 이름이 입력되지 않았습니다.',
}

const ROUND_ERROR_MESSAGE = {
  empty_value: '[ERROR] 입력값에 숫자를 적지 않았거나 공백을 적었습니다.',
  not_numeric: '[ERROR] 입력값에 숫자를 제외한 문자가 포함되어 있습니다.',
  not_integer: '[ERROR] 입력값이 정수가 아닙니다.',
  less_than_one: '[ERROR] 입력값이 0이거나 음수입니다.',
}

const Validator = {
  validateNames: (names) => {
    validateNameCounts(names);
    names.map((name) => {
      validateName(name);
    })
  },

  validateRounds: (round) => {
    validateEmptyRound(round);
    validateNumeric(round);
    validateInteger(round);
    validateCorrectNumber(round);
  }
}

const validateNameCounts = (names) => {
  if (names.length < LEAST_NAME_COUNTS) {
    throw NAME_ERROR_MESSAGE.less_than_two_names;
  }
}

const validateName = (name) => {
  validateEmptyName(name);
  validateConatinsNumber(name);
  validateInvalidCharacter(name);
  validateLength(name);
}

const validateEmptyName = (string) => {
  if (isEmpty(string)) {
    throw NAME_ERROR_MESSAGE.empty_name;
  }
}

const validateEmptyRound = (string) => {
  if (isEmpty(string)) {
    throw ROUND_ERROR_MESSAGE.empty_value;
  }
}

const validateConatinsNumber = (name) => {
  if (isNumeric(name)) {
    throw NAME_ERROR_MESSAGE.contains_number;
  }
}

const validateInvalidCharacter = (name) => {
  if (hasSpecialCharacter(name)) {
    throw NAME_ERROR_MESSAGE.invalid_character;
  }
}

const validateLength = (name) => {
  if (!hasCorrectLength(name)) {
    throw NAME_ERROR_MESSAGE.length_error;
  }
}

const validateNumeric = (number) => {
  if (!isNumeric(number)) {
    throw ROUND_ERROR_MESSAGE.not_numeric;
  }
}

const validateInteger = (number) => {
  if (!isInteger(number)) {
    throw ROUND_ERROR_MESSAGE.not_integer;
  }
}

const validateCorrectNumber = (number) => {
  if (isLessThanOne(number)) {
    throw ROUND_ERROR_MESSAGE.less_than_one;
  }
}

const isEmpty = (string) => {
  return string.trim().length === EMPTY_LENGTH;
}

const isNumeric = (string) => {
  return !isNaN(Number(string));
}

const hasSpecialCharacter = (character) => {
  return !ALPHABETIC_REGULAR_EXPRESSION.test(character);
}

const hasCorrectLength = (string) => {
  return string.length <= CORRECT_LENGTH;
}

const isInteger = (string) => {
  return Number.isInteger(Number(string));
}

const isLessThanOne = (number) => {
  return Number(number) < LEAST_ROUND_NUMBER;
}

export default Validator;