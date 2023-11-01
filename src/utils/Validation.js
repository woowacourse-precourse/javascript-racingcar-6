class Validation {
  validateInputCar(carNameArray) {
    carNameArray.forEach((carName) => {
      if (carName === '' || carName.length > 5 || carName.trim() === '') {
        throw new Error(
          '[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.',
        );
      }
    });
  }

  validateInputNumber(inputValue) {
    if (
      isNaN(inputValue) || inputValue.trim() === ''
    ) {
      throw new Error('[ERROR] 시도할 횟수는 숫자 형식만 가능합니다.');
    }
    if (Number(inputValue) === 0) {
      throw new Error('[ERROR] 1 이상의 숫자를 입력해주세요.');
    }
  }
}

export default Validation;
