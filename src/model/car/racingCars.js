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
}
