import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import OverName from "./OverName.js";

class SingleName extends OverName {
  isSingleName(players) {
    const tempArray = players.split(',').filter((carName) => carName !== '');
    return tempArray.length === 1;
  }

  showSingleNameError(players) {
    if (this.isSingleName(players)) {
      throw new Error(ERROR_MESSEAGE.nameSingle);
    }
  }
}

export default SingleName;
