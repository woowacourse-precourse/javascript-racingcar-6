import { MissionUtils } from "@woowacourse/mission-utils";
import { inputPrintConstants, errorConstants, regExpConstants } from '../utils/index.js';


export default class CarName {
  static async inputCarName() {
    const carName = await MissionUtils.Console.readLineAsync(inputPrintConstants.INPUT_CAR_NAME);

    return carName;
  }

  // inputCarName에 대한 유효성 검사
  static validateCarName(name) {
    if (!regExpConstants.regFirstForm.test(name)) throw new Error (errorConstants.WRONG_NAME_ERROR);

    const nameSplitArr = name.split(",");
    const nameSplitArrLen = nameSplitArr.length;
    let beforeName = '';
    for (let idx = 0; idx < nameSplitArrLen; idx++){
      if (!regExpConstants.regNameLen.test(nameSplitArr[idx])) throw new Error(errorConstants.NAME_LENGTH_ERROR);
      if (!regExpConstants.regLanguage.test(nameSplitArr[idx])) throw new Error(errorConstants.DIFFERENT_LANGUAGE_ERROR);
      if (beforeName === nameSplitArr[idx]) throw new Error(errorConstants.SAME_NAME_ERROR);
      beforeName = nameSplitArr[idx];
    }
  }
}