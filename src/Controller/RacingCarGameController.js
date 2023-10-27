import { printRacingCar, printMessage, printWinnerRacingCarName } from "../View/OutputView.js";
import { inputRacingCarName, inputGameCount } from "../View/InputView.js";
import { GAME_MESSAGE } from "../Util/Message.js";
import { getTurnOverResult, getRacingCarWinner} from "../Model/RacingCarGame.js";

function racingCarWinner(finalRacingCarList) {
  const winnerCarName = getRacingCarWinner(finalRacingCarList);
  printWinnerRacingCarName(winnerCarName);
}

function racingCarMove(racingCarList, gameCount) {
  if (gameCount === 0) return racingCarList; 
  const newRacingCarList = getTurnOverResult(racingCarList);
  printRacingCar(newRacingCarList);
  return racingCarMove(newRacingCarList, gameCount - 1); 
}

async function racingcarStart() {
  const racingCarList = await inputRacingCarName(GAME_MESSAGE.INPUT_CARNAME);
  const gameCount = await inputGameCount(GAME_MESSAGE.INPUT_GAMECOUNT);
  return { racingCarList : racingCarList, gameCount : gameCount };
}

async function gameController() {
  const { racingCarList, gameCount } = await racingcarStart();
  printMessage(GAME_MESSAGE.OUTPUT_TITLE);
  const finalRacingCarList = racingCarMove(racingCarList, gameCount);
  racingCarWinner(finalRacingCarList); 
}

export { gameController }