import Util from './Util.js';
import { MESSAGE } from './constant.js';

class Participant {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }

  moveOrNot() {
    if (Util.getRandomBoolean()) {
      this.progress += MESSAGE.progressIcon;
    }
  }
}

export default Participant;
