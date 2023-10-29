import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, GAME } from "../pages/text.js";

export default function isGo() {
  const number = MissionUtils.Random.pickNumberInRange(0, 9);
  if (number >= 4) return true;
}
