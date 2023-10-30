import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RACING from "../constants/message";

class RacingGameOutPut {
    cars = []
    count = 0

    constructor(count, cars) {
        this.gameMoveCount = count
        this.cars = cars
    }

    startRacingGame() {
        Console.print(RACING.GAME_RESULT)

        for (let i = 0; i < this.gameMoveCount; i++) {
            this.cars.forEach(car => {
                const isMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4
                car?.move(isMove)
            })
        }

        let winnerArray = [this.cars[0]];

        for (let j = 1; j < this.cars.length; j++) {
            if (winnerArray[0].getPosition() === this.cars[j].getPosition()) {
                winnerArray.push(this.cars[j])
            }

            if (winnerArray[0].getPosition() < this.cars[j].getPosition()) {
                winnerArray = [this.cars[j]]
            }
        }

        let winnerName = winnerArray.map(value => value.getCarName()).join(', ')
        Console.print(RACING.END_GAME(winnerName))
    }
}

export default RacingGameOutPut