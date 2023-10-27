import { MissionUtils } from '@woowacourse/mission-utils';

function playGame(cnt) {
  const DISTANCE = new Array(Number(cnt)).fill(0);
  DISTANCE.forEach((_, i) => {
    DISTANCE[i] = MissionUtils.Random.pickNumberInRange(0, 9);
  });
  return DISTANCE;
}

class App {
  async play() {
    const CAR_LIST_INPUT = await MissionUtils.Console.readLineAsync('');
    const CAR_LIST = CAR_LIST_INPUT.split(',');
    CAR_LIST.forEach((CAR_NAME) => {
      if (CAR_NAME.length > 5) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다');
      }
    });

    const LOOP_COUNT = await MissionUtils.Console.readLineAsync('');

    const DISTANCE_CAR_MOVE = new Array(Number(LOOP_COUNT)).fill(0);
    for (let i = 0; i < LOOP_COUNT; i++) {
      const DISTANCES = playGame(LOOP_COUNT);
      DISTANCES.forEach((distance, index) => {
        if (distance >= 4) {
          DISTANCE_CAR_MOVE[index] += distance;
        }
      });
    }
  }
}

export default App;
