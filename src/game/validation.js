const validate = {
  carName: (nameArray) => {
    nameArray.forEach((carName) => {
      if (carName === undefined) throw new Error('[ERROR] 문자열을 입력해주세요.');
      if (carName === null) throw new Error('[ERROR] 문자열을 입력해주세요.');
      if (carName.length > 5) throw new Error('[ERROR] 입력은 최대 5자입니다.');
      if (carName.length === 0) throw new Error('[ERROR] 한자리 이상의 이름을 입력해주세요.');
    });
    if (nameArray.length > 9) throw new Error('[ERROR] 자동차는 9대까지 등록가능합니다.');
  },
  lapLength: (length) => {
    const numberCheck = /[^1-9]/;
    if (length === undefined) throw new Error('[ERROR] 숫자를 정확히 입력해주세요.');
    if (length === null) throw new Error('[ERROR] 숫자를 정확히 입력해주세요.');
    if (numberCheck.test(length)) throw new Error('[ERROR] 1-9 사이에 숫자를 입력해주세요.');
    if (length > 99) throw new Error('[ERROR] 최대 2자리 수까지 입력이 가능합니다.');
  },
};

export default validate;
