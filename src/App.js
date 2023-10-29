import Print from './Print';
import Car from './Car';

class App {
  constructor() {
    this.carArray = [];
    this.count = 0;
  }

  async play() {
    await this.setInitialValue();
    this.startRace();
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
}

export default App;
