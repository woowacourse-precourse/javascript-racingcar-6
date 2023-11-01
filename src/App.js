import CarRacingGame from './CarRacingGame';
class App {
  async play() {
    const CarRacing = new CarRacingGame();
    await CarRacing.gameStart().catch((error) => {
      throw error;
    });
  }
}

export default App;
