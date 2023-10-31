import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './racingcar/domain/Input.js';
import GameStart from './racingcar/domain/GameStart.js';

class App {
  async play() {
    //게임 시작
    const CAR_NAMES = await Input.uswerInputCarName();
    const CYCLE_SIZE = await Input.uswerInputCycle();
    const CAR_MOVE_DECIDE = GameStart.carMoveDecide;
    const CAR_MOVE_TRY_RESULT = GameStart.carMoveTryResult;

    for (let i = 0; i < CYCLE_SIZE; i++) {
      CAR_MOVE_TRY_RESULT(CAR_NAMES);
      CAR_MOVE_DECIDE(CAR_NAMES);
    }
  }
}
export default App;
