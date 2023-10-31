/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */

// import { MissionUtils } from '@woowacourse/mission-utils';
// import { MissionUtils } from '@woowacourse/mission-utils';
import { MissionUtils } from '@woowacourse/mission-utils';
import Cars from './Cars.js';
import PlayCount from './PlayCount.js';

class App {
  async play() {
    const cars = new Cars();
    const playCount = new PlayCount();

    cars.getCarsNames().then(() => {
      playCount.getPlayCount();
    });
  }
}

export default App;
