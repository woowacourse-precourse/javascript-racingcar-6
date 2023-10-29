import { MissionUtils } from '@woowacourse/mission-utils';
import ValidateCarName from './Validate/ValidateCarName.js';
import ValidateGameNumber from './Validate/ValidateGameNumber.js';
import PrintResults from './Print/PrintResults.js';
import PrintWinner from './Print/PrintWinner.js';
import RACING_CAR_GAME from './Constant/Constant.js';

class App {
  async play() {
    try {
      const USER = (
        await MissionUtils.Console.readLineAsync(RACING_CAR_GAME.GET_CAR)
      ).split(',');
      ValidateCarName(USER);

      const GAME_NUMBER = Number(
        await MissionUtils.Console.readLineAsync(RACING_CAR_GAME.GET_NUMBER)
      );
      ValidateGameNumber(GAME_NUMBER);

      MissionUtils.Console.print(RACING_CAR_GAME.RESULT);

      const RACING_CAR = PrintResults(USER, GAME_NUMBER);

      PrintWinner(RACING_CAR);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
