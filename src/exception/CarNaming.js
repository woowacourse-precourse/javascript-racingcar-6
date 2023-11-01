import BaseExceptionHandler from './Errorcase';

// 상수 모듈
import { NUMBER } from '../utils/Constants';

class CarNaming extends BaseExceptionHandler {
  constructor(names) {
    super();
    this.names = names;
  }

  isValidArrayLength() {
    const { names } = this;
    if (names.length <= NUMBER.ONE) {
      throw new Error(
        '[ERROR] 자동차 이름을 작성하지 않았거나, 자동차 한 대로는 게임을 진행할 수가 없습니다.',
      );
    }

    if (names.length > NUMBER.TWENTY) {
      throw new Error(
        '[ERROR] 저희 F1 월드 챔피언쉽은 한 경기에 출전할 수 있는 자동차의 수가 최대 20대입니다.',
      );
    }
  }

  handleDuplicatedName() {
    const nameSet = new Set(this.names);
    if (nameSet.size !== this.names.length) {
      throw new Error('[ERROR] 자동차 이름이 중복되었습니다.');
    }
  }

  handleException() {
    this.isValidArrayLength();
    this.handleDuplicatedName();

    this.names.forEach((name) => {
      if (name.length >= NUMBER.SIX || name.length <= NUMBER.ZERO) {
        throw new Error(
          '[ERROR] 자동차 이름은 1글자에서 5글자까지만 가능합니다.',
        );
      }

      if (/\s+/.test(name)) {
        throw new Error('[ERROR] 자동차 이름에 공백이 포함되어 있습니다.');
      }

      if (/[^a-zA-Z0-9,]/.test(name)) {
        throw new Error(
          '[ERROR] 자동차 이름은 영어, 숫자만 사용할 수 있습니다.',
        );
      }
    });
  }
}

export default CarNaming;
