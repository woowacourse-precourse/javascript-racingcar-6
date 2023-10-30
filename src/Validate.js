const doValidate = (input) => {
  isInputLengthRight(input);
};

// 입력한 숫자의 자릿수가 세 자리 인지 확인하는 함수
const isInputLengthRight = (input) => {
  if (input.length > 5) throw new Error('[ERROR] 이름은 쉼표(,) 기준으로 구분하여 5자 이내로 입력해주세요.');
};

export default doValidate;
