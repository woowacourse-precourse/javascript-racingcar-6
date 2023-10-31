const validator = {
  validateCarName(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        console.log('오류');
        throw new Error('[ERROR] 자동차 이름은 각 5자 이하만 가능합니다.');
      }
      if (carName === '') {
        throw new Error(
          '[ERROR] 자동차 이름은 1자 이상 5자 이상 입력가능합니다.'
        );
      }
    });
  },
  validateChance(number) {
    if (Number.isNaN(number)) {
      throw new Error('[ERROR] 횟수는 숫자로만 입력가능합니다.');
    }
    if (number <= 0) {
      throw new Error('[ERROR] 횟수는 1 이상의 숫자로 입력가능합니다.');
    }
    if (number === '') {
      throw new Error('[ERROR] 횟수는 1 이상의 숫자로 입력가능합니다.');
    }
  },
};

export default validator;
