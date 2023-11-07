import { GameSetting, GameErrorMsg } from '../constants/gameConstants.js';

export class Validator {
  static validateNumber(RACE_ROUND) {
    const ROUND = RACE_ROUND
    if (isNaN(ROUND)) throw new Error(GameErrorMsg.numberInputError);
    if (ROUND < GameSetting.minRaceLimit) throw new Error(GameErrorMsg.numberRangeError);
    if (GameSetting.maxRaceLimit < ROUND) throw new Error(GameErrorMsg.numberRangeError);
  }

  static validateString(USER_LIST) {
    const USERS_SET = new Set(USER_LIST);
    const USERS = [...USERS_SET]
    if (USERS.some((USER) => GameSetting.maxNameLength < USER.length)) throw new Error(GameErrorMsg.maxLengthNameError);
    if (USERS.some((USER) => !GameSetting.nameRegex.test(USER)))throw new Error(GameErrorMsg.nameFormatError)
    if (USERS.length != USER_LIST.length) throw new Error(GameErrorMsg.sameCarNameError);
  }
}
