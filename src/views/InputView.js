import { Console } from '@woowacourse/mission-utils'
import Validator from '../validator/Validator.js'
import splitStringByDelimiter from '../utils/splitStringByDelimiter.js'
import ValidationError from '../errors/ValidationError.js'
import { ERROR_MESSAGE, GAME_MESSAGE } from '../constants/index.js'

const InputView = {
  /**
   * 자동차 이름을 입력받는다.
   * @returns {string[]}
   */
  readCarName() {
    const carNames = Console.readLineAsync(GAME_MESSAGE.INPUT_CAR_NAMES)
    const carNameList = splitStringByDelimiter(carNames, ',')

    if (Validator.isDuplicateName(carNameList)) {
      throw new ValidationError(ERROR_MESSAGE.DUPLICATE_NAME)
    }

    if (Validator.validNameLengthByNameList(carNameList, 5)) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_NAME_LENGTH)
    }

    return carNameList
  },

  /**
   * 시도 횟수를 입력받는다.
   * @returns {number}
   */
  readTryCount() {
    const tryCount = Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_COUNT)

    if (Validator.validTryCount(tryCount, 1)) {
      throw new ValidationError(ERROR_MESSAGE.INVALID_TRY_COUNT)
    }

    return Number(tryCount)
  },
}

export default InputView
