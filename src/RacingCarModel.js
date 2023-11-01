import Car from './ViewResult.js';

class RacingCarModel {
  constructor() {
    this.cars = [];
    this.rounds = 0;
  }

  setCars(carNames) {
    const CARNAMELIST = carNames.split(",");

    if (CARNAMELIST.length > 10) {
      throw new Error("[ERROR] 차량은 최대 10종입니다.");
    }

    CARNAMELIST.forEach(name => {
      const trimmedName = name.trim();
      if (trimmedName.length > 0 && trimmedName.length <= 5)
        this.cars.push(new Car(trimmedName));
      else
        throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 가능합니다.");
    });
  }

  setRounds(roundsInput) {
    if (isNaN(roundsInput)) {
      throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
    }

    if (roundsInput.length !== 1 || roundsInput < 1 || roundsInput > 9) {
      throw new Error("[ERROR] 라운드는 1에서 9까지의 자연수만 허용합니다.");
    }

    this.rounds = Number(roundsInput);
  }

  validateCarNames() {
    for (const car of this.cars)
      if (!car.isValidName()) throw new Error("[ERROR] 차량 이름이 유효하지 않습니다.");
  }

  playRound() {
    this.cars.forEach(car => car.move());
  }

  getRoundResult() {
    return this.cars.map(car => `${car.getName()} : ${car.getPosition()}`);
  }

  getWinners() {
    const maxPosition = Math.max(...this.cars.map(car => car.getPosition().length));
    const winnersNames = [];
    for (const car of this.cars)
      if (car.getPosition().length === maxPosition) winnersNames.push(car.getName());
    return winnersNames;
  }
}

export default RacingCarModel;