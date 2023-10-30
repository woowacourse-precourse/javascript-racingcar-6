const Validator = {
  checkNull(input) {
    if (!input) throw new Error('[ERROR] 값을 입력해주세요.');
  },
  checkNameLength(input) {
    input.map((name) => {
      if (name.length > 6) {
        throw new Error('[ERROR] 각 입력값은 5자 이하만 가능합니다.');
      }
    })
  },
  checkCount(input) {
    input.split('').forEach((char) => {
      if (!'0123456789'.includes(char)) {
        throw new Error('[ERROR] 입력값이 정수가 아닙니다.');
      }
    });
  },
}

export { Validator };