class Car {
  #name
  #distance

  constructor(name, distance){
    this.name = name;
    this.distance = distance;
  }

  getCarName() {
    return this.#name;
  }

  getCarDistance() {
    return this.#distance;
  }

  moveForward() {
    this.#distance += 1;
  } 
}

export default Car;