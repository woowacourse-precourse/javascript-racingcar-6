class Validator {
  /**
   * 이름 리스트의 길이가 유효한지 검사한다.
   * @param {string[]} nameList 이름 리스트
   * @param {number} maxLength 최대 길이
   * @returns {boolean}
   */
  static validNameLengthByNameList(nameList, maxLength) {
    return nameList.every((name) => this.validNameLength(name, maxLength))
  }

  /**
   * 이름의 길이가 유효한지 검사한다.
   * @param {string} name 이름
   * @param {number} maxLength 최대 길이
   * @returns {boolean}
   */
  static validNameLength(name, maxLength) {
    return name.length <= maxLength && name.length > 0
  }

  /**
   * 이름이 중복되는지 검사한다.
   * @param {string[]} nameList 이름 리스트
   * @returns {boolean}
   */
  static isDuplicateNameByNameList(nameList) {
    return nameList.length !== new Set(nameList).size
  }

  /**
   * 시도 횟수가 유효한지 검사한다.
   * @param {number} inputTryCount 입력된 시도 횟수
   * @param {number} minTryCount 최소 시도 횟수
   * @returns {boolean}
   */
  static validTryCount(inputTryCount, minTryCount) {
    return Number.isInteger(inputTryCount) && inputTryCount >= minTryCount
  }
}

export default Validator
