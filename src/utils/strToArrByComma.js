export const strToArrByComma = (str) => {
  str = str.replaceAll(' ', ''); // 공백 제거
  const arr = str.split(',');
  return arr;
};