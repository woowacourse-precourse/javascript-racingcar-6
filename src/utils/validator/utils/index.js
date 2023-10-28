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
