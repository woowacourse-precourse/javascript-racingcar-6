class App {
  async play() {
    const racingCar = new RacingCar();
    await racingCar.start();
  }
}

export default App;
