import { Random } from "@woowacourse/mission-utils";
import { FOWARD_PROB_BOUNDARY } from "./const.js";

/**
 * @returns {boolean}
 */
export function isFowardAllowed() {
  return Random.pickNumberInRange(0, 9) >= FOWARD_PROB_BOUNDARY;
}
