import { Console } from "@woowacourse/mission-utils";
import { checkName, checkNumber } from "../util/check.js";
import Car from "./Car.js";
import RACING from "../constants/message.js";

class Game {
    static async setRacingCars() {
        let carStringNames = await Console.readLineAsync(RACING.NAMING_GUIDE)
        let carArrayNames = carStringNames.split(',')

        let cars = []

        await checkName(carArrayNames)

        carArrayNames.forEach(name => {
            cars.push(new Car(name))
        })

        return cars
    }

    static async setGameMoveCount() {
        const moveCount = Number(await Console.readLineAsync(RACING.QUESTION_COUNT))

        await checkNumber(moveCount)

        return moveCount
    }
}

export default Game