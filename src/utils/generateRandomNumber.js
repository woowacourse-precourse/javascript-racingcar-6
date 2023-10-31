import { Random } from '@woowacourse/mission-utils';

export default function generateRandomNumber() {
  return Random.pickNumberInRange(0, 9);
}
