import racingGame from "../model/racingGame.js";
import getCarNameAndCheck from "../util/getCarNameAndCheck.js";
import getTryNumberAndCheck from "../util/getTryNumberAndCheck.js";

async function controller() {
  let carName = await getCarNameAndCheck();
  let tryCount = await getTryNumberAndCheck();

  racingGame(carName, tryCount);
}
export default controller;
