import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant";

const Output = {
    roundAttempt(attempt) {
        MissionUtils.Console.print(`${MESSAGE.attempt} ${attempt + 1}:`);
    },
    roundResult(car) {
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
    },
    winner(winners) {
        MissionUtils.Console.print(`${MESSAGE.end} ${winners.join(', ')}`);
    },
}

export default Output;