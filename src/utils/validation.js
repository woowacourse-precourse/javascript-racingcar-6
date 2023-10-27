export const isNameLengthUnderFive = (name) => {
  if (name.length > 5) throw new Error("[ERROR]이름이 올바른 형식이 아닙니다.");
};

export const isCountInputValid = (input) => {
  if (isNaN(input) || !input) throw new Error("[ERROR]유효한 숫자가 아닙니다.");
};
