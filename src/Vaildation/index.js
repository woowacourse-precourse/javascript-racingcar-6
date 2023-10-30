import { ERROR } from "../Constants/error.js";
// export default function ValidateCheck() {
export const validateCarNameLength = (cars, i) => {
  if (cars[i].length > 5) throw new Error(ERROR.LENGTH);
};

export const validateCarNameInput = (cars, i) => {
  const regex = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
  if (regex.test(cars[i])) throw new Error(ERROR.INPUT);
};

export const validateNoWhiteSpace = (input) => {
  // 왜 옵셔널을 사용해야만 정상적으로 테스트가 되는 건지 ?
  if (input?.trim() === "") throw new Error(ERROR.WHITESPACE);

  return input;
};

export const validateNumberType = (input) => {
  const regex = /^\d{1,2}$/;

  if (!regex.test(input)) throw new Error(ERROR.NUMBER_TYPE);
};

// export const validateDuplicate
