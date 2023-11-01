export async function roundValidate(round) {
  const numTest = round;

  if (/[^1-9]$/.test(numTest)) {
    throw new Error("[ERROR] 숫자를 입력하세요.");
  }

  if (numTest.includes(" ")) {
    throw new Error("[ERROR] 공백 없이 입력하세요.");
  }
}
