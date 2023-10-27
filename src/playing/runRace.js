import { MissionUtils } from '@woowacourse/mission-utils';


const determineWin = () => {
  const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  return randomNumber >= 4;
}
