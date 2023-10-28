import { MissionUtils } from '@woowacourse/mission-utils';

const pickRandomNumberInRange = (start, end) => {
  return MissionUtils.Random.pickNumberInRange(start, end);
};

const decideCarMoveForward = () => {
  const randomNumber = pickRandomNumberInRange(0, 9);
  const answer = randomNumber >= 4;

  return answer;
};

export default decideCarMoveForward;
