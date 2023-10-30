export const hasWhiteSpace = (str) => {
  return str.includes(' ');
};

export const isInteger = (str) => {
  const num = Number(str);
  return Number.isInteger(num);
};

export const isNumber = (str) => {
  return !isNaN(Number(str));
};
