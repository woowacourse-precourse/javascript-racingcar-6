import { Console } from '@woowacourse/mission-utils';

const Validation = {
  validateCarNames(carNames) {
    const isAllCarNamesValid = carNames.every((carName) => carName.length <= 5);

    if (!isAllCarNamesValid) {
      throw new Error('자동차의 이름은 5글자 이하여야 합니다.');
    }
  },

  validateRaceRound(round) {
    if (!Number.isInteger(round)) {
      throw new Error('정수값을 입력해주세요.');
    }
    if (round <= 0) {
      throw new Error('0보다 큰 숫자를 입력해주세요.');
    }
  },
};

export default Validation;
