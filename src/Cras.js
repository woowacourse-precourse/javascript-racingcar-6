export default class Cars {
  constructor(input) {
    this.cars = input.split(",");
    this.len = this.cars.length
  }

  move_cars(moves) {
    moves.forEach((v,i) => {
      if(v>=4) {
        this.cars[i] += v;
      }
    })
  }
}