import Util from './Util.js';

class Participant {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }

  moveOrNot() {
    if (Util.getRandomBoolean()) {
      this.progress += '-';
    }
  }
}

export default Participant;
