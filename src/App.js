import { MissionUtils } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './constants/gameMessage';
import User from './modules/User';

class App {
  async play() {
    const carNames = await User.inputCarNames();
    const count = await User.inputGameCount();

    const gameResults = [];
    let win = '';

    MissionUtils.Console.print(GAME_MESSAGE.gameResult);
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
