import { Random } from "@woowacourse/mission-utils";
import NUMBER from "../constant/number.js";
export default function moveSign() {
  if (Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX) >= NUMBER.MOVE_NUMBER) {
    return true;
  } else {
    return false;
  }
}
