import printMessage from "../View/OutputView.js";
import { InputRacingCarName } from "../View/InputView.js";
import { GAME_MESSAGE } from "../Util/Message.js";

function racingcarGameStart(){
  InputRacingCarName(GAME_MESSAGE.START);
}

export {racingcarGameStart}