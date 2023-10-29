export const getHyphens = (count) => {
  if (count <= 0) return '';

  return '-'.repeat(count);
};

export const splitStringByComma = string => string.split(',');

export const joinArrayWithComma = array => array.join(',');

export const isEmptyString = string => string.trim() === '';