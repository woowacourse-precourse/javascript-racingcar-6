import { validateMoveCount } from '../utils/moveCountValidator';
import { strToNum } from '../utils/typeConvertor';

class MoveCount {
  #count;

  constructor (){
    this.#count = 1;
  }

  setCount(input){
    validateMoveCount(input);
    this.#count = strToNum(input);
  }

  getCount(){
    return this.#count;
  }
}

export default MoveCount;