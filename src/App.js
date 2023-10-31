import { Console } from '@woowacourse/mission-utils';
import { getCarName } from './View.js';

class App {
  async play() {
    await getCarName();

    return this;
  }
}

export default App;
