import InputView from '../view/InputView';
import CarPlayers from '../model/CarPlayers';

class RacingCarController {
  #inputView;

  #carPlayers;

  constructor(){
    this.#inputView = new InputView();
    this.#carPlayers = new CarPlayers();
  }

  async play(){
    const carsNameInput = await this.#inputView.readPlayerCars();
    this.#carPlayers.setPlayers(carsNameInput);

    const moveCountInput = await this.#inputView.readMoveCounts();
  }
}

export default  RacingCarController;