const InputValidator = {
  validateRacingCarName(input) {
    input.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 차의 이름은 5자 이하만 가능합니다.");
      }
    });
  },

  validateRacingAttempt(input) {
    if (input < 1) {
      throw new Error("[ERROR] 시도 횟수는 1이상인 자연수여야 합니다.");
    }
    if (Number.isInteger(input) === false) {
      throw new Error("[ERROR] 시도 횟수는 자연수여야 합니다.");
    }
  },
};

export default InputValidator;
