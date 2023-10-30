export const calculateLongLen = (strArr) => {
  const lenArr = strArr.map(str => str.length);
  return Math.max(...lenArr);
}

export const findSameLenElement = (strArr, len) => {
  const result = strArr.filter(str => str.length === len);
  return result;
}