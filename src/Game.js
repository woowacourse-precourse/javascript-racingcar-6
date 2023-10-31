import { Random, Console } from "@woowacourse/mission-utils";
import { parseValidCarNames, parseValidNumber } from "./Validations.js";
import { PRINT, SET_MOVE_CONDITION } from "./constants.js";

class Game {
  #cars = new Map();
  #moveCount = 0;
  #maxDistance = 0;
  constructor() {}
}
export default Game;
