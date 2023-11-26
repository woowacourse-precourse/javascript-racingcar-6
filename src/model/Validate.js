class Validate {
  static isCheckCarName(input) {
    try {
      const split = input.split(",");
      Validate.isCheckCarCount(split);
      Validate.isCheckDuplicatedName(split);
      Validate.isCheckProperLength(split);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static isCheckProperLength(split) {
    split.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5글자 이상 입력해야합니다.");
      }
    });
  }

  static isCheckCarCount(split) {
    if (split.length < 2) {
      throw new Error(
        "[ERROR] 자동차 이름을 2대 이상 입력해주세요.(쉼표로 구분)"
      );
    }
  }

  static isCheckDuplicatedName(split) {
    if (new Set(split).size !== split.length) {
      throw new Error("[ERROR] 중복된 자동차 이름을 작성하면 안됩니다.");
    }
  }
}

export default Validate;
