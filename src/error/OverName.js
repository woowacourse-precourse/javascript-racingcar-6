import { ERROR_MESSEAGE } from "../constants/Messeage.js";
import Commas from "./Commas.js";

class OverName extends Commas {
  isOverName(players) {
    const carNameArray = players.split(',').filter((carName) => carName.length > 5);
    
    if (carNameArray.length !== 0) {
      return true;
    } 
  }
  //이건 comma에러가 아닐때 고려한다.
  overNameArray(players) {
    if(this.isOverName(players)) {
      return players.split(',').filter((carName) => carName.length > 5);
    }
  }

  showOverNameError(players) {
    if (this.isOverName(players)) {
      throw new Error(ERROR_MESSEAGE.nameLength);
    }
  }
}

export default OverName

