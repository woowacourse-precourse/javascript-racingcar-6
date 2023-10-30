import { CAR_NAMES, CARS } from "../constants/carRacing.js";

export const INPUT_MESSAGE = Object.freeze({
  INPUT_CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
});

const ERROR_MESSAGE_PREFIX = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  INPUT_CARS_LESS_THAN_TWO: `${ERROR_MESSAGE_PREFIX} 2대 이상의 자동차를 입력해주세요.`,
  INPUT_CAR_NAMES_TOO_SHORT: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CAR_NAMES.MIN_LENGTH}자 이상 입력해주세요.`,
  INPUT_CAR_NAMES_TOO_LONG: `${ERROR_MESSAGE_PREFIX} 자동차 이름은 ${CAR_NAMES.MAX_LENGTH}자 이하로 입력해주세요.`,
  INPUT_CAR_NAME_IS_DUPLICATED: `${ERROR_MESSAGE_PREFIX} 자동차 이름이 중복되지 않게 입력해주세요.`,
});
