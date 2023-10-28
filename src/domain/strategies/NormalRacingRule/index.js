import { RacingRule } from "../RacingRule";
import { pickNumberInRage } from "../../../utils";

const MIN_VALUE = 0;
const MAX_VALUE = 9;
const THRESHOLD = 4;

export class NormalRacingRule extends RacingRule {
  shouldRun() {
    return pickNumberInRage(MIN_VALUE, MAX_VALUE) >= THRESHOLD;
  }
}
