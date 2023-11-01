import GetInput from "./GetInput";
import Output from "./Output";

const getInput = new GetInput();
class App {
  async play() {
    const CAR = await getInput.getCarNameInput();
    const TRY = await getInput.getNumberInput();
    const MOVE_COUNT_ARRAY = Array.from({ length: CAR.length }, () => 0);
    const output = new Output(CAR, MOVE_COUNT_ARRAY, TRY);
    output.runWhileFinish();
    output.whoIsWinner();
  }
}

export default App;
