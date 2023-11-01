import { Console } from '@woowacourse/mission-utils'
import Validator from '../validator/Validator.js'
import splitStringByDelimiter from '../utils/splitStringByDelimiter.js'
import ValidationError from '../errors/ValidationError.js'
import { ERROR_MESSAGE, GAME_MESSAGE, GAME_RULE } from '../constants/index.js'

const InputView = {
  /**
   * 자동차 이름을 입력받는다.
   * @returns {Promise<string[]>}
   */
  async readCarNames() {
    const carNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAMES)
    const carNameList = splitStringByDelimiter(carNames, GAME_RULE.DELIMITER_FOR_CAR_NAMES)

    if (Validator.isDuplicateNameByNameList(carNameList)) {
      throw new ValidationError(ERROR_MESSAGE.DUPLICATE_NAME)
    }

    if (!Validator.validNameLengthByNameList(carNameList, GAME_RULE.MAX_NAME_LENGTH)) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_NAME_LENGTH)
    }

    return carNameList
  },

  /**
   * 시도 횟수를 입력받는다.
   * @returns {Promise<number>}
   */
  async readTryCount() {
    const tryCount = await Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_COUNT)

    const numberTryCount = Number(tryCount)

    if (!Validator.validTryCount(numberTryCount, GAME_RULE.MIN_TRY_COUNT)) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_TRY_COUNT)
    }

    return numberTryCount
  },
}

export default InputView
