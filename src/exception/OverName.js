import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import { GAME_RULE } from "../constants/Constants.js";
import Commas from "./Commas.js";

class OverName extends Commas {
  isOverName(players) {
    const carNameArray = players.split(',').filter((carName) => carName.length > GAME_RULE.maxNameLength);
    
    if (carNameArray.length !== 0) return true; 
  }
  
  overNameArray(players) {
    if (this.isOverName(players)) {
      return players.split(',').filter((carName) => carName.length > GAME_RULE.maxNameLength);
    }
  }

  showOverNameError(players) {
    if (this.isOverName(players)) {
      throw new Error(`${ERROR_MESSEAGE.nameLength} [${this.overNameArray(players)}]`);
    }
  }
}

export default OverName;
