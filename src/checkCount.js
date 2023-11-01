function checkCount(count) {
  checkString(count);
  checkNaturalNumber(count);
}

function checkString(count) {
  if (isNaN(count)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}

function checkNaturalNumber(count) {
  // 0포함 음수거나 소수이면
  if (count <= 0 || !Number.isInteger(count)) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
}
export default checkCount;
