import RacingcarGameInput from './lib/classes/RacingcarGameInput';
import RacingcarGameEngine from './lib/classes/RacingcarGameEngine';

class App {
  constructor() {
    this.racingcarGameEngine = new RacingcarGameEngine();
    this.racingcarGameInput = new RacingcarGameInput();
  }

  // TODO: racingcarGameInput 1개로 -> 객체 반환?>
  async play() {
    const racingCars = await this.racingcarGameInput.getRacingCarList();
    const playCount = await this.racingcarGameInput.getPlayCount();
    this.racingcarGameEngine.startGame(racingCars, playCount);
  }
}

export default App;
