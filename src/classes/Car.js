export default class Car {
  #name;

  #forward=0;

  constructor(name) {
    this.#name = name;
  }

  get getForward(){
    return this.#forward;
  }

  set setForward(value){
    this.#forward = value;
  }
}
