import { Console } from '@woowacourse/mission-utils';

const Validation = {
  validateCarNames(carNames) {
    const isAllCarNamesValid = carNames.every((carName) => carName.length <= 5);

    if (!isAllCarNamesValid) {
      throw new Error('자동차의 이름은 5글자 이하여야 합니다.');
    }
  },
};

export default Validation;
