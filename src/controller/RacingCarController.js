import InputView from '../view/InputView';

class RacingCarController {
  #inputView;

  constructor(){
    this.#inputView = new InputView();
  }

  async play(){
    const playerCars = await this.#inputView.readPlayerCars();
  }
}

export default  RacingCarController;