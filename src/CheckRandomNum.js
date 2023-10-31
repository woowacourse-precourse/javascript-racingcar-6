import { Console, MissionUtils } from '@woowacourse/mission-utils';

function CheckValue(randomNum, forwardCounts, idx) {
  if (randomNum >= 4) {
    forwardCounts[idx]++
  };
  return forwardCounts
};

export function CheckRandomNum(carList, forwardCounts) {
  const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
  carList.map((car, idx) => {
    forwardCounts = CheckValue(randomNum, forwardCounts, idx);
    Console.print(car + ' : ' + '-'.repeat(forwardCounts[idx]));
  })
  return forwardCounts;
}

