const doValidateCarName = (input) => {
  isInputLengthRight(input);
};

const doValidateMoveCount = (input) => {
  isInputNumber(input);
};

const isInputNumber = (input) => {
  if (Number.isNaN(input * 1)) {
    throw new Error('[ERROR] 시도 횟수는 숫자로 입력해주세요.');
  }
};

const isInputLengthRight = (input) => {
  if (input.length > 5) throw new Error('[ERROR] 이름은 쉼표(,) 기준으로 구분하여 5자 이내로 입력해주세요.');
};

export { doValidateCarName, doValidateMoveCount };
