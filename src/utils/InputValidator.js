const InputValidator = {
  validateInputRaceCarName(input) {
    const raceCarNames = input.split(",");
    if (raceCarNames.some((carName) => carName.length > 5))
      throw new Error("[ERROR] 자동차의 이름은 5자를 넘어갈 수 없습니다.");
    if (raceCarNames.length !== new Set(raceCarNames).size)
      throw new Error("[ERROR] 자동차의 이름은 중복될 수 없습니다.");
    if (input.replace(/\s/g, "").length !== input.length)
      throw new Error("[ERROR] 자동차의 이름에 공백이 포함될 수 없습니다.");
    if (input.length === 0)
      throw new Error("[ERROR] 자동차의 이름을 한 개이상 입력해주세요");
  },

  validateInputRaceCarNumberOfAttempts(input) {
    if (input.replace(/\d/g, "").length > 0)
      throw new Error("[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.");
    if (input === "0" || input === "")
      throw new Error("[ERROR] 시도할 횟수는 0이 될 수 없습니다.");
  },
};

export default InputValidator;
