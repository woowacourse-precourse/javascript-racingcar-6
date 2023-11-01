import { MissionUtils } from '@woowacourse/mission-utils';
import Input from './racingcar/domain/Input.js';
import GameStart from './racingcar/domain/GameStart.js';

class App {
  async play() {
    //게임 시작
    const CAR_NAMES = await Input.uswerInputCarName();
    const CYCLE_SIZE = await Input.uswerInputCycle();

    for (let i = 0; i < CYCLE_SIZE; i++) {
      GameStart.carMoveTryResult(CAR_NAMES);
      GameStart.carMoveDecide(CAR_NAMES);
    }
  }
}
export default App;
