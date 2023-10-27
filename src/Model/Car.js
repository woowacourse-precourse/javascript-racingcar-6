class Car {
  name;
  constructor() {
    this.name = '';
  }

  async getName(name) {
    this.name = name;
  }
}

export default Car;