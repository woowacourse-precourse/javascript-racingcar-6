import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    const inputCarName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    const count = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    // 자동차 이름 분리하기
    const carNames = inputCarName.split(',');
    const gameResults = [];
    let win = '';

    MissionUtils.Console.print('실행 결과');
    for (let i = 0; i < count; i++) {
      win = `${win}-`;
      // 랜덤 숫자 생성
      const randomNumbers = [];
      for (let i = 0; i < carNames.length; i++) {
        randomNumbers[i] = await MissionUtils.Random.pickNumberInRange(0, 9);
      }

      // 랜덤 숫자에 맞춰 - 문자열 생성
      for (let i = 0; i < carNames.length; i++) {
        const randomNumber = randomNumbers[i];
        if (randomNumber > 4) {
          const result = `${gameResults[i] ? gameResults[i] : ''}-`;
          gameResults[i] = result;
        }
      }

      // 게임 결과 출력
      for (let i = 0; i < carNames.length; i++) {
        MissionUtils.Console.print(`${carNames[i]} : ${gameResults[i] ? gameResults[i] : ''}`);
      }
      MissionUtils.Console.print('');
    }

    const winner = [];
    for (let i = 0; i < carNames.length; i++) {
      if (gameResults[i] === win) {
        winner.push(carNames[i]);
      }
    }

    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
