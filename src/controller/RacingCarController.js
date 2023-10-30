/* eslint-disable lines-between-class-members */
import { Console } from '@woowacourse/mission-utils';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarPlayers from '../model/CarPlayers';
import MoveCount from '../model/MoveCount';
import GameResult from '../model/GameResult';
import { strToStrArr } from '../utils/typeConvertor';


class RacingCarController {
  #inputView;
  #outputView;
  #carPlayers;
  #moveCount;
  #gameResult;

  constructor(){
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
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
    const result = this.#gameResult.getResult();
    this.#outputView.printGameStart();
    for(let i = 1; i <= totalMove; i+=1){
      players.forEach((player, idx) => {
        this.#gameResult.moveCarsResult(idx);
        this.#outputView.printGameResult(player, result[idx]);
      })
      Console.print('\n');
    }
  }

  showWinner(){
    this.#gameResult.setWinner();
    const winner = this.#gameResult.getWinner();
    this.#outputView.printWinner(winner);
  }
}

export default  RacingCarController;