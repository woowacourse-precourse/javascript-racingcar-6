/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    MissionUtils.Console.print('this is test right now. app.play method');
  }
}

export default App;

// MissionUtils.Console.print('this is test right now');
