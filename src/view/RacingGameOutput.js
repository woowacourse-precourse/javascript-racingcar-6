import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RACING from "../constants/message.js";

class RacingGameOutPut {
    static startRacingGame(gameMoveCount, cars) {
        Console.print(RACING.GAME_RESULT)

        for (let i = 0; i < gameMoveCount; i++) {
            cars.forEach(car => {
                const isMove = MissionUtils.Random.pickNumberInRange(0, 9) >= 4
                car?.move(isMove)
            })
        }

        let winnerArray = [cars[0]];

        for (let j = 1; j < cars.length; j++) {
            if (winnerArray[0].getPosition() === cars[j].getPosition()) {
                winnerArray.push(cars[j])
            }

            if (winnerArray[0].getPosition() < cars[j].getPosition()) {
                winnerArray = [cars[j]]
            }
        }

        let winnerName = winnerArray.map(value => value.getCarName()).join(', ')
        Console.print(RACING.END_GAME(winnerName))
    }
}

export default RacingGameOutPut