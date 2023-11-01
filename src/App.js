
import { inputCarNames, inputMoveCount, raceCars, printWinner } from './pages/module';

class App {
  async play() {
    // 자동차 이름 입력 받기
    const carNames = await inputCarNames();

    // 이동 횟수 입력 받기
    const moveCount = await inputMoveCount();

    // 경주 실행
    const winners = raceCars(carNames, moveCount);

    // 우승자 출력
    printWinner(winners);
  }
}

export default App;
