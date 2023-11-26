class Validate {
  static isCheckCarName(splited) {
    try {
      Validate.isCheckCarCount(splited);
      Validate.isCheckDuplicatedName(splited);
      Validate.isCheckProperLength(splited);

      return splited;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static isCheckNumber(input) {
    try {
      Validate.isCheckProperRange(input);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static isCheckProperLength(splited) {
    splited.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이상 입력해야합니다.");
      }
    });
  }

  static isCheckCarCount(splited) {
    if (splited.length < 2) {
      throw new Error(
        "[ERROR] 자동차 이름을 2대 이상 입력해주세요.(쉼표로 구분)"
      );
    }
  }

  static isCheckDuplicatedName(splited) {
    if (new Set(splited).size !== splited.length) {
      throw new Error("[ERROR] 중복된 자동차 이름을 작성하면 안됩니다.");
    }
  }

  static isCheckProperRange(input) {
    if (Number(input) < 1 || Number(input) > 9) {
      throw new Error("[ERROR] 시도할 횟수는 1부터 9까지 입력이 가능합니다.");
    }
  }
}

export default Validate;
