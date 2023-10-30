import { MissionUtils } from '@woowacourse/mission-utils';

export const startRound = function startRoundAndCalculateScore(
  namesArray,
  scoreObject
) {
  // 랜덤으로 점수 + 1
  namesArray.forEach(carName => {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    scoreObject[`${carName}`] += randomNumber >= 4 ? 1 : 0;
  });
};
