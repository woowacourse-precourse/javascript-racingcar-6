import VALIDATION_CONDITION from './game.validation';

const validations = {
  validLength(item, min, max) {
    return item.length >= min && item.length <= max;
  },

  validDuplication(array) {
    return array.every((item, index) => array.lastIndexOf(item) === index);
  },

  carsName(nameArray) {
    // 자동차 이름의 길이 검사
    if (
      !nameArray.every((name) =>
        this.validLength(
          name,
          VALIDATION_CONDITION.carNameLength.min,
          VALIDATION_CONDITION.carNameLength.max,
        ),
      )
    ) {
      throw new Error(
        `[ERROR] 자동차 이름의 길이는 ${VALIDATION_CONDITION.carNameLength.min}이상 ${VALIDATION_CONDITION.carNameLength.max}이하여야 합니다`,
      );
    }

    // 중복된 이름이 있는지 검사
    if (!this.validDuplication(nameArray)) {
      throw new Error('[ERROR] 중복된 자동차 이름이 없도록 입력해주세요');
    }
  },

  moveCount(count) {
    if (!count) {
      throw new Error('[ERROR] 횟수를 입력하지 않으셨습니다');
    }

    if (Number.isNaN(Number(count))) {
      throw new Error('[ERROR] 숫자만을 입력해주세요');
    }

    if (Number(count) < 0) {
      throw new Error('ERROR] 음수는 입력할 수 없습니다');
    }
  },
};
export default validations;
