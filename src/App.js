import { Console } from '@woowacourse/mission-utils';
import { getCarName, getTryCount } from './View.js';

class App {
  async play() {
    await getCarName();
    await getTryCount();

    return this;
  }
}

export default App;
