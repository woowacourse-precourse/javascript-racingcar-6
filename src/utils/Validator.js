const Validator = {
  // 자동차 이름은 쉼표(,)를 기준으로 구분하며 

  // 이름은 5자 이하만 가능하다.
  checkNameLength(nameList) {
    nameList.map((name) => {
      if (name.length > 6) {
        throw new Error('[ERROR] 각 입력값은 5자 이하만 가능합니다.');
      }
    })
  },
  checkCount(count) {
    count.split('').forEach((char) => {
      if (!'0123456789'.includes(char)) {
        throw new Error('[ERROR] 입력값이 정수가 아닙니다.');
      }
    });
  }


}

export { Validator };