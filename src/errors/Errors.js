import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import SingleName from "./SingleName.js";

class Errors extends SingleName {
  show(players) {
    this.showCommaError(players);
    this.showOverNameError(players);
    this.showSingleNameError(players);
  }
}

export default Errors