import Assistant from './Assistant.js';
import RancingCar from './RacingCar.js';

class App {
  participants;
  assistant;
  numberOfTry;

  constructor() {
    this.participants = [];
    this.assistant = new Assistant();
  }

  async play() {
    await this.decideParticipants();
    await this.decideNumberOfTry();
    await this.process();
    this.announceResult();
  }

  async decideParticipants() {
    const data = await this.assistant.getCarList();
    const carList = data.split(',');

    this.assistant.validateCarList(carList);
    carList.forEach((name) => {
      const car = new RancingCar(name);
      this.participants.push(car);
    });
  }

  async decideNumberOfTry() {
    const number = await this.assistant.getNumberOfTry();
    this.assistant.validateNumberOfTry(number);
    this.numberOfTry = number;
  }

  async process() {
    this.assistant.announceProcess();
    for (let count = 0; count < this.numberOfTry; count++) {
      await Promise.all(this.participants.map((car) => car.race())).then((value) =>
        this.assistant.markSteps(value),
      );
    }
  }

  announceResult() {
    const winners = this.assistant.selectWinners([...this.participants]);
    this.assistant.announceWinners(winners);
  }
}

export default App;
