import Util from './Util';

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
