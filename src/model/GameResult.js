/* eslint-disable lines-between-class-members */
import randomNumGenerator from '../utils/randomNumGenerator';
import { MOVE_STR } from '../constants/constants';

class GameResult {
  #result
  #winner

  constructor(){
    this.#result = [];
    this.#winner = '';
  }

  setResult(num){
    this.#result = Array(num).fill('');
  }

  moveResult(idx){
    const randomNum = randomNumGenerator();
    if(randomNum >= 4) this.#result[idx] += MOVE_STR;
  }
}

export default GameResult;

