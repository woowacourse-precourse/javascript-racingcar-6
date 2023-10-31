import RacingGameInPut from "../view/RacingGameInput.js";
import RacingGameOutput from "../view/RacingGameOutput.js";

const RacingGameController = async () => {
    const { count, cars } = await RacingGameInPut.setRacingGame()
    RacingGameOutput.startRacingGame(count, cars)
}

export default RacingGameController