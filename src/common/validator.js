import { GAME_SETTING } from './constants.js';

// 자동차 이름 유효성 검사
const isUniqueCarName = (input) => {
  const names = input.split(',').map(name => name.trim());
  return names.length === new Set(names).size;
};

export const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());

  return (
    carNames.length >= GAME_SETTING.MIN_LENGTH_CAR_NAME &&
    carNames.every(name => name.length <= GAME_SETTING.MAX_LENGTH_CAR_NAME) &&
    !carNames.includes('') &&
    isUniqueCarName(carNames.join(','))
  );
};

// 시도 횟수 유효성 검사
const isNumericTryCount = (input) => /^[1-9]\d*$/.test(input);

export const isValidTryCount = (input) => (
  input.toString().length >= GAME_SETTING.MIN_TRY_COUNT && isNumericTryCount(input)
);
