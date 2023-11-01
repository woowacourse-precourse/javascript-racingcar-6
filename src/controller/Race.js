import Screen from '../view/Screen';
import Car from '../model/Car';

class Race {
  static async start() {
    const names = await Screen.inputNames();
    const cars = names.map((name) => new Car(name));

    let count = await Screen.inputCount();

    Screen.printResultMessage();

    while (count > 0) {
      cars.forEach((car) => {
        car.moveForward();
        Screen.printResult(car);
      });

      Screen.printNewline();

      count -= 1;
    }

    const maxMoveCount = cars.reduce(
      (currentMax, car) => Math.max(currentMax, car.moveCount),
      0,
    );

    const winners = cars
      .filter((car) => car.moveCount === maxMoveCount)
      .map((car) => car.name);

    Screen.printWinnersName(winners);
  }
}

export default Race;
