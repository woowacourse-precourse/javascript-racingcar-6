class RacingCars {
  checkInputNull(inputNamesString) {
    if (!inputNamesString) {
      throw new Error("[ERROR] 이름을 입력해 주세요.");
    }
  }

  parseCarNames(inputNamesString) {
    const carNamesList = inputNamesString.split(",").map((name) => name.trim());
    return carNamesList;
  }

  checkDuplicateNames(carNames) {
    const uniqueNames = new Set(carNames);

    if (uniqueNames.size !== carNames.length) {
      throw new Error("[ERROR] 중복된 이름이 있습니다.");
    }
  }
}
