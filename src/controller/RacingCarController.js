/* eslint-disable lines-between-class-members */
import InputView from '../view/InputView';
import CarPlayers from '../model/CarPlayers';
import MoveCount from '../model/MoveCount';
import GameResult from '../model/GameResult';
import { strToStrArr } from '../utils/typeConvertor';

class RacingCarController {
  #inputView;
  #carPlayers;
  #moveCount;
  #gameResult;

  constructor(){
    this.#inputView = new InputView();
    this.#carPlayers = new CarPlayers();
    this.#moveCount = new MoveCount();
    this.#gameResult = new GameResult();
  }

  async play(){
    await this.getCarsName();
    await this.getMoveCount();
  }

  async getCarsName(){
    const carsNameInput = await this.#inputView.readPlayerCars();
    this.#carPlayers.setPlayers(carsNameInput);

    const carsCount = strToStrArr(carsNameInput).length;
    this.setGameResult(carsCount);
    this.moveCars();
  }

  async getMoveCount(){
    const moveCountInput = await this.#inputView.readMoveCounts();
    this.#moveCount.setCount(moveCountInput);
  }

  setGameResult(num){
    this.#gameResult.setResult(num);
  }

  moveCars(){
    const totalMove = this.#moveCount.getCount();
    const players = this.#carPlayers.getPlayers();
    // 프린트하고
    for(let i = 1; i <= totalMove; i+=1){
      players.forEach((player, idx) => {
        this.#gameResult.moveResult(idx);
      })
      // 프린트 하는 코드 여기
    }

  }
}

export default  RacingCarController;