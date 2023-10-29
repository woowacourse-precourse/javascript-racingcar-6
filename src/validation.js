const validate = {
  carName: (nameArray) => {
    nameArray.forEach((carName) => {
      if (carName.length > 5) throw new Error('[ERROR] 입력은 최대 5자입니다.');
      if (carName.length === 0) throw new Error('[ERROR] 한자리 이상의 이름을 입력해주세요.');
      if (nameArray.length > 9) throw new Error('[ERROR] 자동차는 9대까지 등록가능합니다.');
    });
  },
  lapLength: (length) => {
    const numberCheck = /[^1-9]/;
    if (numberCheck.test(length)) throw new Error('[ERROR] 숫자를 입력해주세요');
  },
};

export default validate;
