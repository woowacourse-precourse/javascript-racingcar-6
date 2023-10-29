import InputError from "./InputError";

const checkNameValid = (name) => {
  if (name.length > 5) throw new InputError("이름은 5글자 이하만 가능합니다.");
};

export { checkNameValid };
