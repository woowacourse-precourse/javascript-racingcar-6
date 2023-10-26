import printMessage from "../View/OutputView.js";
import { inputRacingCarName, inputGameCount } from "../View/InputView.js";
import { GAME_MESSAGE } from "../Util/Message.js";

function racingCarMove(racingCarList, gameCount){

}

async function racingcarGameStart(){
  const racingCarList = await inputRacingCarName(GAME_MESSAGE.INPUT_CARNAME);
  const gameCount = await inputGameCount(GAME_MESSAGE.INPUT_GAMECOUNT);
}

export {racingcarGameStart}