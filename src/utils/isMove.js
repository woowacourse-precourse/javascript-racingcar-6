import { Random } from '@woowacourse/mission-utils';
import {
  MAX_RANGE_NUMBER,
  MIN_MOVE_NUMBER,
  MIN_RANGE_NUMBER,
} from '../constants/conditions';

export default function isMove() {
  return (
    Random.pickNumberInRange(MIN_RANGE_NUMBER, MAX_RANGE_NUMBER) >=
    MIN_MOVE_NUMBER
  );
}
