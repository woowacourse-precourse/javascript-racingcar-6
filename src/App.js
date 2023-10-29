import Print from './Print';
import Car from './Car';

class App {
  async play() {
    const participateCars = await Print.getCarsName();
    const count = await Print.getCount();

    participateCars.forEach(carName => {
      const car = new Car(carName, count);
    });
  }
}

export default App;
