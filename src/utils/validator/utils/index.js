import { SYSTEM } from '../../../constants/System.js';

export const isDelimiter = (input) => {
  const DELIMITER = ',';
  const Reg = new RegExp(DELIMITER, 'g');
  const result = input.match(Reg)?.length;
  return Boolean(result);
};

export const isNameLength = (input) => {
  const { name_length_max, name_length_min, delimiter } = SYSTEM;
  return input.split(delimiter).every((name) => {
    return name.length >= name_length_min && name.length <= name_length_max;
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
