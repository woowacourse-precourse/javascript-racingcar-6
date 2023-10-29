import { Console } from '@woowacourse/mission-utils';

export default class Validator {
  static validate(condition, errorMessage) {
    try {
      if (!condition) {
        throw errorMessage;
      }
      return true;
    } catch (err) {
      Console.print(err);
      throw new Error(err);
    }
  }

  static validateUndefinedOrNullOrSpacesOrLengthZero(value) {
    return (
      Validator.isUndefinedOrNull(value) &&
      Validator.isMinLengthOneOrIncludeSpace(value)
    );
  }

  static validateMoveCount(value) {
    return Validator.isUndefinedOrNull(value) && Validator.isNum(value);
  }

  static isMinLengthOneOrIncludeSpace(value) {
    return (
      Validator.isMinLengthOne(value) && Validator.isNotIncludeSpace(value)
    );
  }

  static isUndefinedOrNull(value) {
    return Validator.isNotUndefined(value) && Validator.isNotNull(value);
  }

  static isMaxLengthFive(value) {
    return Validator.validate(
      value.length <= 5,
      '[ERROR] 입력이 유효하지 않습니다. 5글자 이하로 입력해주세요.',
    );
  }

  static isMinLengthOne(value) {
    return Validator.validate(
      value.length >= 1,
      '[ERROR] 입력이 유효하지 않습니다. 1글자 이상으로 입력해주세요.',
    );
  }

  static isNotNull(value) {
    return Validator.validate(
      value !== null,
      '[ERROR] 입력이 유효하지 않습니다. null 또는 undefined일 수 없습니다.',
    );
  }

  static isNotUndefined(value) {
    return Validator.validate(
      value !== undefined,
      '[ERROR] 입력이 유효하지 않습니다. null 또는 undefined일 수 없습니다.',
    );
  }

  static isNotIncludeSpace(value) {
    return Validator.validate(
      !value.includes(' '),
      '[ERROR] 입력이 유효하지 않습니다. 문자열에 공백이 포함되어 있습니다.',
    );
  }

  static isNum(value) {
    return Validator.validate(
      /^[1-9]\d*$/.test(value),
      '[ERROR] 입력이 유효하지 않습니다. 숫자를 입력해 주세요.',
    );
  }
}
