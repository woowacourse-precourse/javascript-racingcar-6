import { Console, MissionUtils } from '@woowacourse/mission-utils';

function CheckValue(randomNum, forwardCounts, idx) {
  if (randomNum >= 4) {
    forwardCounts[idx]++
  };
  return forwardCounts
};

export function CheckRandomNum(carList, forwardCounts) {
  carList.map((car, idx) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    forwardCounts = CheckValue(randomNum, forwardCounts, idx);
    Console.print(car + ' : ' + '-'.repeat(forwardCounts[idx]));
  })
  return forwardCounts;
}

