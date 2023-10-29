import { MissionUtils } from '@woowacourse/mission-utils';
import ValidateCarName from './Validate/ValidateCarName.js';
import ValidateGameNumber from './Validate/ValidateGameNumber.js';
import PrintResults from './Print/PrintResults.js';
import PrintWinner from './Print/PrintWinner.js';

class App {
  async play() {
    try {
      const USER = (
        await MissionUtils.Console.readLineAsync(
          '경주 할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
        )
      ).split(',');
      ValidateCarName(USER);

      const GAME_NUMBER = Number(
        await MissionUtils.Console.readLineAsync(
          '시도 할 횟수는 몇 회인가요?\n'
        )
      );
      ValidateGameNumber(GAME_NUMBER);

      MissionUtils.Console.print('실행 결과');

      const RACING_CAR = PrintResults(USER, GAME_NUMBER);

      PrintWinner(RACING_CAR);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
