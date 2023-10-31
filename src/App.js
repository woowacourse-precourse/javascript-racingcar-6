import { Console } from '@woowacourse/mission-utils';
import { getCarName, getTryCount } from './View.js';
import Model from './Model/Model.js';

class App {
  constructor() {
    this.model = new Model();
  }

  async play() {
    const cars = await getCarName();
    this.model.addCar(cars);
    await getTryCount();

    return this;
  }
}

export default App;
