import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import SingleName from "./SingleName.js";

class SameName extends SingleName {
  isSameName(players) {
    const playersArray = players.split(',');
    const uniqueNameArray = [...new Set(playersArray)];
    
    if (playersArray.length !== uniqueNameArray.length) return true;
  }
  
  sameNameArray(players) {
    const playersArray = players.split(',');
    const duplicatedNameArray = playersArray.filter((carName,index) => index !== playersArray.indexOf(carName));
    
    return [...new Set(duplicatedNameArray)];
  }

  showSameNameError(players) {
    if (this.isSameName(players)) {
      throw new Error(`${ERROR_MESSEAGE.nameDuplication} [${this.sameNameArray(players)}]`);
    }
  }
}

export default SameName;
