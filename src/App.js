import { MissionUtils } from '@woowacourse/mission-utils';

function playGame(cnt) {
  const randomNumList = new Array(Number(cnt)).fill(0);
  randomNumList.forEach((_, i) => {
    randomNumList[i] = MissionUtils.Random.pickNumberInRange(0, 9);
  });
  return randomNumList;
}

class App {
  async play() {
    const CAR_LIST = (await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n')).split(',');
    CAR_LIST.forEach((CAR_NAME) => {
      if (CAR_NAME.length > 5) {
        throw new Error('[ERROR] 입력이 5자 이하가 아닙니다');
      }
    });

    const LOOP_COUNT = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    MissionUtils.Console.print('실행 결과');

    const distanceCarMove = new Array(CAR_LIST.length).fill(0);
    for (let i = 0; i < LOOP_COUNT; i++) {
      const RANDOMNUMS = playGame(CAR_LIST.length);
      let print = '';
      RANDOMNUMS.forEach((randomNum, index) => {
        if (randomNum >= 4) {
          distanceCarMove[index] += randomNum;
        }
        print += `${CAR_LIST[index]} : ${'-'.repeat(randomNum)}\n`;
      });
      MissionUtils.Console.print(print);
    }
    const WIN_DISTANCE = Math.max(...distanceCarMove);
    const MEMBERS = CAR_LIST.filter((car, index) => distanceCarMove[index] >= WIN_DISTANCE);
    MissionUtils.Console.print(`최종 우승자 : ${MEMBERS.join(', ')}`);
  }
}

export default App;
