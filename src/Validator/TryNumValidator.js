class TryNumValidator {
  /**
   * 입력받은 시도 횟수
   * @param {string} tryNum
   * 검증되었다면 number로 반환
   * @returns {number}
   */
  static tryNumValidator(tryNum) {
    //* 입력하지 않은 경우
    if (tryNum.trim().length === 0)
      throw new Error('[ERROR] 아무 입력도 하지 않았습니다.');

    const NumtryNum = Number(tryNum);
    //* 숫자가 아닌 경우
    if (!Number.isInteger(NumtryNum))
      throw new Error('[ERROR] 숫자를 입력해주세요.');
    //* 양수가 아닌 경우
    if (NumtryNum <= 0) throw new Error('[ERROR] 양수를 입력해주세요.');

    return NumtryNum;
  }
}

export default TryNumValidator;
