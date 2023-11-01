/* eslint-disable lines-between-class-members */
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import CarPlayers from '../model/CarPlayers';
import MoveCount from '../model/MoveCount';
import GameResult from '../model/GameResult';

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

  async start(){
    await this.getCarsName();
    this.setGameResult();
    await this.getMoveCount();
    this.playCountGames();
    this.showWinner();
  }

  async getCarsName(){
    const carsNameInput = await this.#inputView.readPlayerCars();
    this.#carPlayers.setPlayers(carsNameInput);
  }

  async getMoveCount(){
    const moveCountInput = await this.#inputView.readMoveCounts();
    this.#moveCount.setCount(moveCountInput);
  }

  setGameResult(){
    const len = this.#carPlayers.getPlayers().length;
    this.#gameResult.setResult(len);
  }

  playCountGames(){
    let totalMove = this.#moveCount.getCount();
    this.#outputView.printGameStart();
    while(totalMove > 0){
      this.moveEachCars();
      totalMove -= 1;
    }
  }

  moveEachCars(){
    const players = this.#carPlayers.getPlayers();
    const result = this.#gameResult.getResult();
    players.forEach((player, idx) => {
      this.#gameResult.moveCarsResult(idx);
      this.#outputView.printGameResult(player, result[idx]);
    })
    this.#outputView.printLineBreak();
  }

  showWinner(){
    const players = this.#carPlayers.getPlayers();
    this.#gameResult.setWinner(players);
    const winner = this.#gameResult.getWinner();
    this.#outputView.printWinner(winner);
  }
}

export default  RacingCarController;