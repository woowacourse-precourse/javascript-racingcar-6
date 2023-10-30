import { MissionUtils } from '@woowacourse/mission-utils';

export function CheckRandomNum(forwardCounts, idx) {
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  if (randomNum >= 4) {
    forwardCounts[idx]++
  };
  return forwardCounts;
}

