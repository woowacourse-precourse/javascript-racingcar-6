import { printRacingCar, printMessage } from "../View/OutputView.js";
import { inputRacingCarName, inputGameCount } from "../View/InputView.js";
import { GAME_MESSAGE } from "../Util/Message.js";
import getTurnOverResult from "../Model/RacingCarGame.js";

function racingCarMove(racingCarList, gameCount) {
  if (gameCount === 0) return racingCarList; 
  const newRacingCarList = getTurnOverResult(racingCarList);
  printRacingCar(newRacingCarList);
  return racingCarMove(newRacingCarList, gameCount - 1); 
}

async function racingcarGameStart(){
  const racingCarList = await inputRacingCarName(GAME_MESSAGE.INPUT_CARNAME);
  const gameCount = await inputGameCount(GAME_MESSAGE.INPUT_GAMECOUNT);
  printMessage(GAME_MESSAGE.OUTPUT_TITLE);
  racingCarMove(racingCarList, gameCount);
  
}

export {racingcarGameStart}