import CarRace from '../model/CarRace';

class RaceController {
  constructor() {
    this.carRace = new CarRace();
  }

  runRace() {
    this.insertCarNames();
  }

  insertCarNames() {}
}

export default RaceController;
