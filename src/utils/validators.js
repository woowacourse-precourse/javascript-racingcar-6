export const isValidCarName = (carName) => {
  return /^[A-Za-z]{1,5}$/.test(carName);
};

export const hasDuplicateItem = (array) => {
  return new Set(array).size !== array.length;
};

export const endsWithComma = (string) => {
  return string.endsWith(",");
};

export const isEmptyString = (string) => {
  return string.trim() === "";
};

export const isNaturalNumberString = (str) => {
  const number = Number(str);
  return !isNaN(number) && Number.isInteger(number) && number >= 0;
};
