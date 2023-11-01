import inputView from '../view/inputView.js';

class RaceController {
  #CarModel;

  async setCarList() {
    const input = await inputView.carList();
  }
}

export default RaceController;
