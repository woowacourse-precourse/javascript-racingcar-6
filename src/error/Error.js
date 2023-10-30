import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import SameName from "./SameName.js";

class Error extends SameName {
  name(players) {
    this.showCommaError(players);
    this.showSingleNameError(players);
    this.showOverNameError(players);
    this.showSameNameError(players);
  }

  attempt(number) {
    if(isNaN(number)) {
      throw new Error(ERROR_MESSEAGE.attempt);
    }
  } 
}

export default Error;