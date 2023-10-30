// 사용자 입력 유효서 검사
export const isValidPlayerInput = (input) => {
  isNumber(input);
};

const isNumber = (input) => {
  const regExp = /^[0-9]+$/;

  if (!regExp.test(input)) {
    throw new Error("[ERROR] 숫자 양수만 입력해주세요.");
  }
};
