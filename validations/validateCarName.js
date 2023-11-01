import { IN_GAME_SETTING, IN_GAME_ERROR } from '../src/constants.js';

const validateCarName = (input) => {
  if (input.length === 0) {
    throw new Error(IN_GAME_ERROR.invalidInputCarName.emptyInput);
  }

  if (input.length < IN_GAME_SETTING.minCarNumber || input.length > IN_GAME_SETTING.maxCarNumber) {
    throw new Error(IN_GAME_ERROR.invalidInputCarName.outOfRangeNumbers);
  }

  if (new Set(input).size !== input.length) {
    throw new Error(IN_GAME_ERROR.invalidInputCarName.duplicatedCarName);
  }

  const allowedPattern = new RegExp(
    `^[a-zA-Z0-9]{${IN_GAME_SETTING.minCarNameLength},${IN_GAME_SETTING.maxCarNameLength}}$`,
  );
  for (const name of input) {
    if (!allowedPattern.test(name)) {
      throw new Error(IN_GAME_ERROR.invalidInputCarName.invalidCarNameFormat);
    }
  }
};

export { validateCarName };
