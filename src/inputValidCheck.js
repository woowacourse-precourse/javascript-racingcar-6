import InputError from "./InputError.js";

const checkNameValid = (name) => {
  if (name.length > 5) throw new InputError("이름은 5글자 이하만 가능합니다.");
};

const checkRoundValid = (round) => {
  if (isNaN(+round)) throw new InputError("숫자가 잘못된 형식입니다.");
};

export { checkNameValid, checkRoundValid };
