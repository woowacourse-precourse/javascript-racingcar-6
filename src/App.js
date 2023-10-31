/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */

// import { MissionUtils } from '@woowacourse/mission-utils';
// import { MissionUtils } from '@woowacourse/mission-utils';
import Cars from './Cars.js';

class App {
  async play() {
    const cars = new Cars();
    cars.getCarsNames();
  }
}

export default App;
