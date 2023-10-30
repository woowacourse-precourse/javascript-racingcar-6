/* eslint-disable lines-between-class-members */
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
}

export default GameResult;

