import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import SingleName from "./SingleName.js";

class Errors extends SingleName {
  name(players) {
    this.showCommaError(players);
    this.showOverNameError(players);
    this.showSingleNameError(players);
  }

  attempt(number) {
    if(isNaN(number)) {
      throw new Error(ERROR_MESSEAGE.attempt);
    }
  }
}

export default Errors

