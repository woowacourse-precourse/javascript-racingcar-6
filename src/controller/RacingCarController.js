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
  }

  async getMoveCount(){
    const moveCountInput = await this.#inputView.readMoveCounts();
    this.#moveCount.setCount(moveCountInput);
  }

  setGameResult(num){
    this.#gameResult.setResult(num);
  }
}

export default  RacingCarController;