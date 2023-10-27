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
    const CAR_LIST_INPUT = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const CAR_LIST = CAR_LIST_INPUT.split(',');
    CAR_LIST.forEach((CAR_NAME) => {
      if (CAR_NAME.length > 5) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다');
      }
    });

    const LOOP_COUNT = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    MissionUtils.Console.print('실행 결과');
    const DISTANCE_CAR_MOVE = new Array(CAR_LIST.length).fill(0);
    for (let i = 0; i < LOOP_COUNT; i++) {
      const DISTANCES = playGame(CAR_LIST.length);
      let print = '';
      DISTANCES.forEach((distance, index) => {
        if (distance >= 4) {
          DISTANCE_CAR_MOVE[index] += distance;
        }
        print += `${CAR_LIST[index]} : ${'-'.repeat(distance)}\n`;
      });
      MissionUtils.Console.print(print);
    }
    const WIN_DISTANCE = Math.max(...DISTANCE_CAR_MOVE);
    const MEMBERS = CAR_LIST.filter((car, index) => DISTANCE_CAR_MOVE[index] >= WIN_DISTANCE);
    MissionUtils.Console.print(`최종 우승자 : ${MEMBERS.join(', ')}`);
  }
}

export default App;
