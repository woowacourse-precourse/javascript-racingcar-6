import Car from "./Car";

export default class Race {
  #cars = [];
  #trial;

  constructor(carNames) {
    carNames.split(",").forEach(name => this.addCar(new Car(name)));
  }

  addCar(car) {
    this.#cars.push(car);
  }

  getCars() { // 자동차 객체들을 제대로 관리하고 있는지 확인하는 테스트 코드에 필요한 로직
    return this.#cars;
  }
  
  setTrial(trial) {
    this.#trial = trial;
  }
  
  getTrial() { // setTrial로 설정한 값이 제대로 저장되었는지 확인하는 테스트 코드에 필요한 로직
    return this.#trial;
  }
}