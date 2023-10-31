import Car from './car.js';
import Attempt from './attempt.js';
import Winner from './Winner.js';

class App {
  async play() {
    const cars = await Car.createCarsFromInput();
    const numberOfAttempts = await Attempt.getNumberOfAttempts();

    console.log('\n실행 결과');
    for (let i = 0; i < numberOfAttempts; i++) {
      cars.forEach(car => car.move());
      cars.forEach(car => {
        console.log(`${car.name}: ${car.getDistanceString()}`);
      });
      console.log('\n');
    }

    const winners = await Winner.start(cars, numberOfAttempts);
    const winnerNames = winners.map(winner => winner.name).join(', ');
    console.log(`최종 우승자: ${winnerNames}`);
  }
}

export default App;
