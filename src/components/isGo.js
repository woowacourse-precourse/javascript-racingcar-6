import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

/** 자동차가 출발하는 기능 */
export default function isGo() {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  if (number >= 4) return true;
  return false;
}
