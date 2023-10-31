import { GAME_SETTING } from './constants.js';

const isNumericTryCount = (input) => {
  const numericRegex = new RegExp(`^[${GAME_SETTING.MIN_RANDOM_NUMBER}-${GAME_SETTING.MAX_RANDOM_NUMBER}]$`);
  return numericRegex.test(input);
};

export const isValidTryCount = (input) => (
  input.toString().length === GAME_SETTING.MIN_LENGTH_CAR_NAME && isNumericTryCount(input)
);

const isUniqueCarName = (input) => {
  const names = input.split(',').map(name => name.trim());
  return names.length === new Set(names).size;
};

export const isValidCarName = (input) => {
  const carNames = input.split(',').map(name => name.trim().toUpperCase());

  return (
    carNames.length > GAME_SETTING.MIN_LENGTH_CAR_NAME &&
    carNames.every(name => name.length <= GAME_SETTING.MAX_LENGTH_CAR_NAME) &&
    !carNames.includes('') &&
    isUniqueCarName(carNames.join(','))
  );
};
