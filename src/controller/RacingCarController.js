/* eslint-disable lines-between-class-members */
import InputView from '../view/InputView';
import CarPlayers from '../model/CarPlayers';
import MoveCount from '../model/MoveCount';

class RacingCarController {
  #inputView;
  #carPlayers;
  #moveCount;

  constructor(){
    this.#inputView = new InputView();
    this.#carPlayers = new CarPlayers();
    this.#moveCount = new MoveCount();
  }

  async play(){
    const carsNameInput = await this.#inputView.readPlayerCars();
    this.#carPlayers.setPlayers(carsNameInput);

    const moveCountInput = await this.#inputView.readMoveCounts();
    this.#moveCount.setCount(moveCountInput);
  }
}

export default  RacingCarController;