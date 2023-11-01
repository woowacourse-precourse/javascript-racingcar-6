import { FORWARD } from '../utils/constants';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  forward() {
    this.moveCount += FORWARD.TRUE;
  }
}
export default Car;
