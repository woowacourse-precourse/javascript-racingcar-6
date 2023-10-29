import Print from './Print';
import Car from './Car';
import Result from './Result';

class App {
  constructor() {
    this.carArray = [];
    this.count = 0;
  }

  async play() {
    await this.setInitialValue();
    this.startRace();
    this.selectWinner();
  }

  async setInitialValue() {
    await this.getParticipateCars();
    await this.getCount();
  }

  async getParticipateCars() {
    const participateCars = await Print.getCarsName();
    this.carArray = participateCars.map(
      participateCar => new Car(participateCar),
    );
  }

  async getCount() {
    this.count = await Print.getCount();
  }

  startRace() {
    Print.printRaceResult();

    for (let count = 0; count < this.count; count++) {
      this.getCarResult();
    }
  }

  getCarResult() {
    this.carArray.map(car => {
      const [name, result] = car.move().getCarScore();
      Print.getRaceResult(name, result);
    });
  }

  selectWinner() {
    const result = new Result(this.carArray);
    result.findWinners();
    Print.getWinnersName(result.winners);
  }
}

export default App;
