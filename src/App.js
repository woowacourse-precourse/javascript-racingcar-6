import Input from "./Input";
import RaceRound from "./RaceRound";
import Cars from './Cars';
import Interface from './Interface';
class App {
  async play() {
    const carNames = await Input.enterCarNames();
    const totalRound = await Input.enterTotalRound();
    const cars = new Cars(carNames);

    Interface.printMessage('');
    Interface.printMessage('실행 결과');

    const raceRound = new RaceRound(cars, totalRound);
    raceRound.proceedRound();
    raceRound.announceGameResult();
  }
}

export default App;
