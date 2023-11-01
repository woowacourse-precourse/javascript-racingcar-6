import Race from './Race.js';
import Car from './Car.js';
import { getCarNames, getRoundCount } from './UserInput.js';

class App {
    async play() {
        const carNames = await getCarNames();
        const roundCount = await getRoundCount();
    
        const cars = carNames.map((name) => new Car(name));
        const race = new Race(cars, roundCount);
        race.start();
      }   
}

export default App;