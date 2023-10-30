class CarRacing {
  constructor() {
    this.cars = [];
    this.count;
  }

  async starGame() {
    await this.getCarName();
  }
}
