// 모든 코드는 airbnb의 style guide를 따른다.
import { readLineAsync } from "../utils/missionUtils.js";
import { GAME_MESSAGE } from "../constants/gameMessage.js";

const startGame = async () => {
  await readLineAsync(GAME_MESSAGE.GAME_START);
};

export { startGame };
