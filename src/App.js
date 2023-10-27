import GetInput from "./GetInput.js";
import Output from "./Output.js";

const getInput = new GetInput;

class App {
  async play() {
    const CAR = await getInput.GetCarNameInput();
    const TRY = await getInput.GetNumberInput();
    const MOVE_COUNT_ARRAY = Array.from({length: CAR.length}, () => 0);
    const output = new Output(CAR,MOVE_COUNT_ARRAY,TRY);
    output.RunWhileFinish();
    output.WhoIsWinner();
  }
}

export default App;
