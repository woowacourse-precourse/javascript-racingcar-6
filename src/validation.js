function isNameLengthUnderFive(str) {
  if (str.length > 5) {
    throw Error('[ERROR] 이름이 ');
  }
  return str;
}
export { isNameLengthUnderFive };
