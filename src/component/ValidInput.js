export default class ValidInput {
  async validCarName(carNames) {
    if(!carNames || carNames.length === 0) {
      throw new Error("[ERROR] 이름을 입력하세요.");
    }

    const carNameArr = carNames.split(',').map((name) => name.trim());

    if(carNameArr.every((name) => name.length > 5)) {
      throw new Error("[ERROR] 이름은 5자 이하로 작성해주세요.");
    }
    return carNameArr;
  }

  async validRound(round) {
    if(isNaN(round) || round <= 0) {
      throw new Error("[ERROR] 양수만 입력해주세요.");
    }
    return round;
  }
}
