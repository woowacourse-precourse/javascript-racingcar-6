import { SYSTEM } from '../../../constants/System.js';

export const isDelimiter = (input) => {
  const DELIMITER = ',';
  const Reg = new RegExp(DELIMITER, 'g');
  const result = input.match(Reg)?.length;
  return Boolean(result);
};

export const isNameLength = (input) => {
  const { nameLengthMax, nameLengthMin, delimiter } = SYSTEM;
  return input.split(delimiter).every((name) => {
    return name.length >= nameLengthMin && name.length <= nameLengthMax;
  });
};

export const isQuantityValid = (input) => {
  input.split(SYSTEM.delimiter).every((quantity) => {
    return quantity >= SYSTEM.quantity_min && quantity <= SYSTEM.quantity_max;
  });
};

export const isLanguageValid = (input) => {
  return input.split(SYSTEM.delimiter).every((name) => {
    const pattern = new RegExp(`[^${SYSTEM.koreanPattern}${SYSTEM.englishPattern}]+`, 'g');
    return !pattern.test(name);
  });
};

export const isDuplication = (input) => {
  const inputArray = input.split(SYSTEM.delimiter);
  const nameSet = new Set();

  inputArray.forEach((name) => {
    nameSet.add(name);
  });

  return inputArray.length !== nameSet.size;
};

export const isValidCount = (input) => {
  return Number(input) >= SYSTEM.countMin && Number(input) <= SYSTEM.countMax;
};
