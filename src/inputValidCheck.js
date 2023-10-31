import InputError from "./InputError.js";

const checkNameDuplication = (nameArray) => {
  if (new Set(nameArray).size !== nameArray.length)
    throw new InputError("중복된 이름이 존재합니다.");
};

const checkNameValid = (name) => {
  if (name.length > 5) throw new InputError("이름은 5글자 이하만 가능합니다.");
  if (name.length === 0) throw new InputError("이름을 입력해야 합니다.");
};

const checkRoundValid = (round) => {
  if (isNaN(+round)) throw new InputError("숫자가 잘못된 형식입니다.");
  if (+round <= 0) throw new InputError("0 이상의 수를 입력해야 합니다.");
};

export { checkNameValid, checkRoundValid, checkNameDuplication };
