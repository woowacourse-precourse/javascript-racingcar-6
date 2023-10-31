export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  move() {
    this.distance += 1;
  }
  getDistance() {
    return `${this.name} : ${'-'.repeat(this.distance)}`;
  }
}

export function makeCars(list) {
  const name_list = list.split(',');
  const car_list = [];

  name_list.forEach((name) => {
    const car = new Car(name);
    car_list.push(car);
  });
  return car_list;
}
