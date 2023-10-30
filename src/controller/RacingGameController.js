import Game from "../model/Game.js";
import RacingGameOutput from "../view/RacingGameOutput.js";

const RacingGameController = async () => {
    const cars = await Game.setRacingCars()
    const count = await Game.setGameMoveCount()

    RacingGameOutput.startRacingGame(count, cars)
}

export default RacingGameController