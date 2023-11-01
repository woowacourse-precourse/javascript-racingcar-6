import { CAR_NAME_MAX_LENGTH } from "../constants/NUMBER.js";

const reg = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;

export const isDuplicate = (arr) => {
  return arr.some(
    (element) => arr.indexOf(element) !== arr.lastIndexOf(element)
  );
};

export const isCorrectNameLength = (arr) => {
  return arr.some((element) => element.length > CAR_NAME_MAX_LENGTH + 1);
};

export const isBlank = (arr) => {
  return arr.some((element) => element === "");
};

export const isSpecialSymbol = (arr) => {
  return arr.some((element) => reg.test(element));
};

export const isZero = (value) => {
  return value < 1;
};

export const isNumber = (value) => {
  return isNaN(value);
};
