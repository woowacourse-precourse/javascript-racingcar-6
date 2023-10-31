export const isNumber = (str) => {
  const number = Number(str);
  return Number.isInteger(number);
}
export const isIncludeSpace = (str) => {
  return str.includes(' ');
}