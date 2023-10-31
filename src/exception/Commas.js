import { ERROR_MESSEAGE } from "../constants/Messeage.js";

class Commas {
  isCommaInHeadTail(players) {
    return players.startsWith(',') || players.endsWith(',');
  }

  isCommaContinuous(players) {
    return players.includes(',,');
  }

  isCommaMisuse(players) {
    return this.isCommaInHeadTail(players) || this.isCommaContinuous(players);
  }

  showCommaError(players) {
    if (this.isCommaMisuse(players)) {
      throw new Error(ERROR_MESSEAGE.commaMisuse);
    }
  }
}

export default Commas;
