class Car {
  #name;
  
  #status = [];

  constructor(name) {
    this.#name = name;
  }

  getName = () => this.#name;

  drive = () => this.#status.push('-');

  getStatus = () => this.#status;
}

export default Car;
