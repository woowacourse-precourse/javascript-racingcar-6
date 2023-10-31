/* eslint-disable lines-between-class-members */
import randomNumGenerator from '../utils/randomNumGenerator';
import { calculateLongLen, findSameLenPlayer } from '../utils/gameResultCalculator';
import { strArrTostr } from '../utils/typeConvertor';
import { MOVE_NUM, MOVE_STR } from '../constants/constants';

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

  getResult(){
    return this.#result;
  }

  setWinner(players){
    const longLen = calculateLongLen(this.#result);
    const winnerArr = findSameLenPlayer(this.#result, players, longLen);
    this.#winner = strArrTostr(winnerArr);
  }

  getWinner(){
    return this.#winner;
  }

  moveCarsResult(idx){
    const randomNum = randomNumGenerator();
    if(randomNum >= MOVE_NUM) this.#result[idx] += MOVE_STR;
  }
}

export default GameResult;

