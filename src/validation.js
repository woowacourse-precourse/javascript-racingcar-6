const Validation = {
  strSize(names) {
    names.forEach((name) => {
      if (name.length > 5) {
        throw Error('[ERROR] 이름은 5글자 이하로 입력해주세요.');
      }
    });
  },
  isItNumber(num) {
    if (Number.isNaN(Number(num))) {
      throw Error('[ERROR] 횟수는 숫자로 입력해주세요.');
    }
  },
};

export default Validation;
