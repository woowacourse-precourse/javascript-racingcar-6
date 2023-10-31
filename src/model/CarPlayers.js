import { validateCarsName } from '../utils/carsNameValidator';
import { strToStrArr } from '../utils/typeConvertor';

class CarPlayers {
  #players;
  
  constructor(){
    this.#players = [];
  }

  setPlayers(input){
    validateCarsName(input);
    this.#players = strToStrArr(input);
  }

  getPlayers(){
    return this.#players;
  }
}

export default CarPlayers;