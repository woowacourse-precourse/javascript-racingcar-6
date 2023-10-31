const checkValidation = {
  nameInput: (input) => {
    input.forEach((element) => {
      if (element.length < 1 || element.length > 5) {
        throw new Error('[ERROR] 자동차 이름이 1자 이상 5자 이하여야 합니다.');
      }
    });
    const set = new Set(input);
    if (input.length !== set.size()) {
      throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
    }
  },
  attemptInput: (input) => {
    if (!Number(input) || Number >= 0) {
      throw new Error('[ERROR] 1이상의 숫자를 입력해야 합니다.');
    }
  },
};

export default checkValidation;
