import { IN_GAME_SETTING, IN_GAME_ERROR } from '../src/constants.js';

const validateTurnNumber = (input) => {
  const allowedPattern = new RegExp(
    `^[${IN_GAME_SETTING.minTurnNumber}-${IN_GAME_SETTING.maxTurnNumber}]$`,
  );
  if (!allowedPattern.test(input)) {
    throw new Error(IN_GAME_ERROR.invalidInputTurnNumber);
  }
};

export { validateTurnNumber };
