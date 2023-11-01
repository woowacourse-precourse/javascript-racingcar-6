import { Console } from "@woowacourse/mission-utils";
import { InputError } from "../errors/index.js";

export const INPUT_PROMPT = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
export const ERROR_MESSAGES = Object.freeze({
  EMPTY_INPUT: "입력값이 없습니다.",
  CONTAINS_WHITE_SPACE: "공백이 포함될 수 없습니다.",
  CONSECUTIVE_COMMAS: "쉼표(,)가 연속할 수 없습니다.",
  COMMA_AT_START_OR_END: "쉼표(,)가 시작이나 끝에 올 수 없습니다.",
  SOME_STRING_OVER_FIVE: "각 자동차의 이름은 5자를 초과할 수 없습니다.",
  DUPLICATE_NAMES: "자동차의 이름은 중복될 수 없습니다.",
});

const inputCarNames = async () => {
  const input = await Console.readLineAsync(INPUT_PROMPT);

  if (isEmptyString(input)) {
    throw new InputError(ERROR_MESSAGES.EMPTY_INPUT);
  }

  if (containsWhiteSpace(input)) {
    throw new InputError(ERROR_MESSAGES.CONTAINS_WHITE_SPACE);
  }

  if (containsConsecutiveCommas(input)) {
    throw new InputError(ERROR_MESSAGES.CONSECUTIVE_COMMAS);
  }

  if (containsCommaAtStartOrEnd(input)) {
    throw new InputError(ERROR_MESSAGES.COMMA_AT_START_OR_END);
  }

  if (isSomeStringOverThanFive(input.split(","))) {
    throw new InputError(ERROR_MESSAGES.SOME_STRING_OVER_FIVE);
  }

  if (containsDuplicateStrings(input.split(","))) {
    throw new InputError(ERROR_MESSAGES.DUPLICATE_NAMES);
  }

  return input;
};

const isEmptyString = (str) => {
  return str.length === 0;
};

const containsWhiteSpace = (str) => {
  return /\s/.test(str);
};

const containsConsecutiveCommas = (str) => {
  return /[,]{2}/.test(str);
};

const containsCommaAtStartOrEnd = (str) => {
  return /^,|,$/.test(str);
};

const isSomeStringOverThanFive = (stringArray) => {
  return stringArray.some((str) => str.length > 5);
};

const containsDuplicateStrings = (stringArray) => {
  return stringArray.length !== new Set(stringArray).size;
};

export default inputCarNames;
