import { validCarName, validtryCount } from '../utils/validateInput';
import Car from './Car';

class CarRace {
  constructor() {
    this.tryCount = 0;
    this.carNames = [];
    this.carList = [];
    this.result = {
      moveList: [],
      winners: null,
    };
  }

  makeCarList(carNames) {
    validCarName(carNames);
    const nameFormatting = names => names.replace(/(\s*)/g, '').split(',');
    this.carNames = nameFormatting(carNames);
    this.carNames.forEach(name => {
      this.carList.push(new Car(name));
    });
    return this.carList;
  }

  getRace() {
    validtryCount(this.tryCount);
    this.tryCount = Number(this.tryCount);
    for (let count = 0; count < this.tryCount; count += 1) {
      const round = this.getRaceRound();
      this.result.moveList.push(round);
    }
  }

  getRaceRound() {
    const forwardFormatting = (name, forward) => {
      const forwardArray = Array.from({ length: forward }, () => '-');
      return `${name}: ${forwardArray.join('')}`;
    };

    return this.carList.reduce((acc, car) => {
      car.forward();
      acc.push(forwardFormatting(car.getCarName(), car.getMoveCount()));
      return acc;
    }, []);
  }

  getWinners() {
    const maxMoveCount = this.carList
      .sort((a, b) => b.getMoveCount() - a.getMoveCount())[0]
      .getMoveCount();
    const winners = this.carList.filter(
      car => car.getMoveCount() === maxMoveCount,
    );
    this.result.winners = winners.map(winner => winner.getCarName()).join(', ');
    return this.result.winners;
  }

  getResult() {
    return this.result;
  }
}
export default CarRace;
