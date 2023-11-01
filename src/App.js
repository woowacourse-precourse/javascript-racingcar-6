const { MissionUtils,Random, Console } = require('@woowacourse/mission-utils');

class App {

  async raceCars(carNames, attempts) {
    const movements = [];
    for (let i = 0; i < attempts; i++) {
      const cars = [];
      for (const carName of carNames) {
        const movement = await this.calculateMovement();
        cars.push({ name: carName, movement });
      }
      movements.push(cars);
    }
    this.displayMovements(movements);
  }
  
  async calculateMovement() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    return randomNumber >= 4 ? 1 : 0;
  }

}

export default App;

