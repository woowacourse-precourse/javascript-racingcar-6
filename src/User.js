import { MissionUtils } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGE_FOR_CAR_NAME, LIMIT } from './constant.js';

class User {
  async inputCarName() {
    const inputValue = await MissionUtils.Console.readLineAsync(
      GUIDE_MESSAGE_FOR_CAR_NAME,
    );
    this.validateCarName(inputValue);
    return inputValue.split(',');
  }

  validateCarName(inputString) {
    const inputList = inputString.split(',');
    if (!inputString) throw new Error('[ERROR] 입력 값이 없습니다.');

    if (!inputString.includes(',')) {
      throw new Error('[ERROR] 최소 2개의 자동차 이름을 입력해주십시오,');
    }

    if (inputString.startsWith(',') || inputString.endsWith(',')) {
      throw new Error('[ERROR] 입력 값이 쉼표로 시작하거나 끝날 수 없습니다.');
    }

    inputList.forEach(item => {
      if (item.length > LIMIT.CAR_NAME_LENGTH) {
        throw new Error(`[Error] 각 자동차의 이름은 ${LIMIT.CAR_NAME_LENGTH}자 이하이어야 합니다.`);
      }
    });

    const uniqueNameSet = [ ...new Set(inputList)];
    if (uniqueNameSet.length !== inputList.length) {
      throw new Error(
        '[ERROR] 같은 이름이 존재합니다. 각 자동차의 이름을 달라야 합니다.',
      );
    }
  }
}

export default User;
