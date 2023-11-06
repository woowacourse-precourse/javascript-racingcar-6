/* eslint-disable import/extensions */
import { printRacingCar, printMessage, printWinnerRacingCarName } from '../View/OutputView.js';
import { getTurnOverResult, getRacingCarWinner } from '../Model/RacingCarGame.js';
import { inputRacingCarName, inputGameCount } from '../View/InputView.js';
import { GAME_MESSAGE } from '../Util/Message.js';

function selectRacingCarWinner(finalRacingCarList) {
  const winnerCarNameList = getRacingCarWinner(finalRacingCarList);
  printWinnerRacingCarName(winnerCarNameList);
}

function racingCarMove(racingCarList, gameCount) {
  if (gameCount === 0) return racingCarList;
  const turnOverRacingCarList = getTurnOverResult(racingCarList);
  printRacingCar(turnOverRacingCarList);
  return racingCarMove(turnOverRacingCarList, gameCount - 1);
}

async function handlerInputRacingCarSetting() {
  const initialRacingCarList = await inputRacingCarName(GAME_MESSAGE.INPUT_CARNAME);
  const gameCount = await inputGameCount(GAME_MESSAGE.INPUT_GAMECOUNT);
  return { initialRacingCarList, gameCount };
}

async function gameController() {
  const { initialRacingCarList, gameCount } = await handlerInputRacingCarSetting();
  printMessage(GAME_MESSAGE.OUTPUT_TITLE);
  const finalRacingCarList = racingCarMove(initialRacingCarList, gameCount);
  selectRacingCarWinner(finalRacingCarList);
}

export default gameController;
