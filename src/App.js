import User from "./RacingCar/User.js";
import Computer from "./RacingCar/Computer.js";
import Judge from "./RacingCar/Judge.js";

class App {
  async play() {
    const user = new User();
    const computer = new Computer();
    const judge = new Judge();

    const CARS = await user.getNameInput();
    let count = await user.getCountInput();

    let currentCars = CARS.reduce((acc, car) => {
      return {...acc, [car]: 0}
    }, {})
    
    while (count > 0) {
      const movedCars = computer.moveCars(CARS);
      currentCars = {...currentCars, ...computer.addMovedCars(currentCars, movedCars)};
      computer.printCurrent(currentCars);
      count -= 1;
    }

    judge.judgeWinner(currentCars);
  }
}

export default App;