export default class ValidInput {
  async validCarName(carNames) {
    if(!carNames || carNames === '') {
      throw new Error("[ERROR] 이름을 입력하세요.");
    }

    const carNameArr = carNames.split(',').map((name) => name.trim());
    if(!carNameArr.every((name) => name.length <= 5)) {
      throw new Error("[ERROR] 이름은 5자 이하로 작성해주세요.");
    }
    return carNameArr;
  }

  async validRound(round) {
    if(!round || round === '') {
      throw new Error("[ERROR] 숫자만 입력해주세요.");
    }
  }
}