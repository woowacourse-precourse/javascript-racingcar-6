import Print from './Print';
import Car from './Car';

class App {
  constructor() {
    this.carArray = [];
    this.count = 0;
  }

  async play() {
    await this.setInitialValue();
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
}

export default App;
