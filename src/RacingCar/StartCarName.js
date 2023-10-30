import { MESSAGE } from "../message.js";
import { carName, carNameArray, lengthError, regexError } from "../Validates/CarName.js"

class StartCarName {
  constructor() {
    this.carName = null;
    this.carNameArray = null;
  }
  async startPlay() {
    MESSAGE.GAME_START;

    this.carName = carName;
    this.carNameArray = carNameArray;
    
    if (lengthError.some((element) => !element)) throw new Error(MESSAGE.ERROR);
    
    try {regexError();} 
    catch (error) {
    throw new Error(MESSAGE.ERROR);
    }
  }
}

export default StartCarName;