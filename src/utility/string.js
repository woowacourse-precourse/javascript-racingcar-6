export const getHyphens = (count) => {
  if (count <= 0) return '';

  return '-'.repeat(count);
};

export const splitStringByComma = (string) => string.split(',');

export const joinArrayWithCommaAndBlank = (array) => array.join(', ');
