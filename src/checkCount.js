function checkCount(count) {
  isString(count);
  isNaturalNumber(count);
}

function isString(count) {
  if (isNaN(count)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

function isNaturalNumber(count) {
  // 0포함 음수거나 실수이면
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}
export default checkCount;
