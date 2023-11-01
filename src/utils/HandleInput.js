import { MissionUtils as MU } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, INPUT_MESSAGE, VALIDATION_RULE } from "../Constant";

export const HandleInput = {
  carNames: async () => {
    const names = await handleInput(
      async () => await MU.Console.readLineAsync(INPUT_MESSAGE.CAR_NAMES),
      validateNames,
      (s) => s.split(",")
    );
    return names;
  },
  gameRounds: async () => {
    const gameRounds = await handleInput(
      async () => await MU.Console.readLineAsync(INPUT_MESSAGE.GAME_ROUND),
      validateRound,
      parseInt
    );
    return gameRounds;
  },
};

const handleInput = async (read, validate, parse = (e) => e) => {
  const response = await read();
  validate(response);
  return parse(response);
};

const validateNames = (names) => {
  const parsedNames = names.split(",");
  if (parsedNames.length < VALIDATION_RULE.MIN_GROUP_SIZE_INCLUSIVE)
    throw new Error(ERROR_MESSAGE.INVALID_GROUP_SIZE);
  const visited = new Set();
  parsedNames.forEach((name) => {
    if (name.length < VALIDATION_RULE.MIN_NAME_LENGTH_INCLUSIVE)
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    if (VALIDATION_RULE.MAX_NAME_LENGTH_INCLUSIVE < name.length)
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    if (visited.has(name))
      throw new Error(ERROR_MESSAGE.UNIQUE_CONSTRAINT_VIOLATED);
    visited.add(name);
  });
};

const validateRound = (round) => {
  if (parseInt(round).toString() !== round)
    throw new Error(ERROR_MESSAGE.NOT_AN_INT);
  if (parseInt(round) < VALIDATION_RULE.MIN_GAME_ROUND_INCLUSIVE)
    throw new Error(ERROR_MESSAGE.INVALID_GAME_ROUND);
  if (Number.MAX_SAFE_INTEGER < parseInt(round))
    throw new Error(ERROR_MESSAGE.INVALID_GAME_ROUND);
};
