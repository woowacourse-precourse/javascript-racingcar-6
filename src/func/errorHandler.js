export const inputBlankCheck = (input) => {
  if (!input) throw new Error("[ERROR] 값을 입력해주세요.");
};

export const inputNumberCheck = (input) => {
  const REGEXP = /^[0-9]+$/;
  if (!REGEXP.test(Number(input))) {
    throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
  }
};
