import { pickNumberInRage } from "../pickNumberInRange";

const MIN_VALUE = 0;
const MAX_VALUE = 9;
const THRESHOLD = 4;

export function shouldCarRun() {
  return pickNumberInRage(MIN_VALUE, MAX_VALUE) >= THRESHOLD;
}
