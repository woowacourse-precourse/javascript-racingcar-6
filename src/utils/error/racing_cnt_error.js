class RacingCntError {
  constructor(RACING_CNT) {
    this.RACING_CNT = RACING_CNT;
  }

  racingCntNotExist() {
    if (this.RACING_CNT.length === 0) {
      throw new Error('[ERROR] 시도할 횟수를 입력해주세요.');
    }
    return false;
  }

  racingCntNotNum() {
    if (Number.isNaN(Number(this.RACING_CNT))) {
      throw new Error('[ERROR] 시도할 횟수를 숫자로 입력해주세요.');
    }
    return false;
  }

  racingCntNotPositiveNum() {
    if (Number(this.RACING_CNT) < 1) {
      throw new Error('[ERROR] 시도할 횟수를 양수로 입력해주세요.');
    }
    return false;
  }
}

export default RacingCntError;
