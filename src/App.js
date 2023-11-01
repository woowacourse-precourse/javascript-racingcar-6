import InputView from './view/InputView';
import RaceController from './controller/RaceController';

class App {
  async play() {
    const inputView = new InputView();
    const { userInputCarList, userInputPlayNumber } = await inputView.mappingInputCarListAndUserInputPlayNumber();
    const raceController = new RaceController({ userInputCarList, userInputPlayNumber });
    raceController.startGame();
  }
}

export default App;
