import Game from "../model/Game.js"

class RacingGameInPut {
    static async setRacingGame() {
        const cars = await Game.setRacingCars()
        const count = await Game.setGameMoveCount()

        return { cars, count }
    }
}

export default RacingGameInPut