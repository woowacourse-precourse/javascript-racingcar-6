import { inputCarName, inputTrials } from "../view/inputView";
import printResult from "../view/outputView";

const game = async () => {
  const cars = await inputCarName();
  const trials = await inputTrials();
  printResult(cars, trials);
};

export default game;
