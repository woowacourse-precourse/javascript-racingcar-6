import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./component/Car";
import ValidInput from "./component/ValidInput";
import PlayRound from "./component/PlayRound";
import { Winner } from "./component/Winner";

class App {
  async play() {
    const validInput = new ValidInput();
    const playRound = new PlayRound();
    const gameWinner = new Winner();

    MissionUtils.Console.print("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    const carNames = await MissionUtils.Console.readLineAsync();
    const carNameArr = await validInput.validCarName(carNames);

    MissionUtils.Console.print("시도할 횟수는 몇 회인가요?");
    const roundInput = await MissionUtils.Console.readLineAsync();
    const round = await validInput.validRound(roundInput);

    const cars = carNameArr.map((name) => new Car(name));
    playRound.playRound(cars, round);

    const winners = gameWinner.gameWinners(cars);
    gameWinner.printWinners(winners);
  }
}

export default App;
