function rangeOverZero(input) {
  if (!Number.isSafeInteger(Number(input))) {
    throw new Error('[ERROR] 올바른 정수를 입력해주세요');
  }
  if (Number(input) < 0) {
    throw new Error('[ERROR] 음이 아닌 정수를 입력해주세요');
  }
}

function validLength(input, { minLength = 1, maxLength }) {
  return minLength <= input.length && input.length <= maxLength;
}

function validCarList(input) {
  const list = input.split(',');
  if (list.every((item) => validLength(item, { maxLength: 5 }))) {
    return;
  }
  throw new Error('[ERROR] 자동차 이름을 1글자 이상 5글자 이하로 작성해주세요');
}

const Validator = {
  rangeOverZero,
  validLength,
  validCarList,
};

export default Validator;
