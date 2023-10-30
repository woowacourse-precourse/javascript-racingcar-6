import {MissionUtils} from "@woowacourse/mission-utils";
import {ERROR_HEAD, INPUT_CARS_STRING, INPUT_PLAY_COUNT_STRING, NEWLINE, SPLIT_MARK} from "./constants.js";

import {carListValidator, carNameValidator, carStringValidator, playCountValidator} from "./validator.js";
import Game from "./game.js";

class Init {

    async getUserInput() {
        let carsList = new Array(String);

        MissionUtils.Console.print(INPUT_CARS_STRING);
        const carsString = await MissionUtils.Console.readLineAsync('');

        if (carStringValidator(carsString)) {
            carsList = this.makeCarsList(carsString);
        } else {
            throw new Error(ERROR_HEAD);
        }

        MissionUtils.Console.print(INPUT_PLAY_COUNT_STRING);
        const playCount = await MissionUtils.Console.readLineAsync('');

        MissionUtils.Console.print(NEWLINE);

        if (playCountValidator(playCount)) {
            const game = new Game();
            return game.startRacing(carsList, playCount);
        } else {
            throw new Error(ERROR_HEAD);
        }
    }

    makeCarsList(carsString) {
        const carsList = carsString.split(SPLIT_MARK).map(carName => carName.trim());

        const isCarNameValid = carsList.every(carName => carNameValidator(carName));
        const isCarListValid = carListValidator(carsList)

        if (!isCarNameValid || !isCarListValid) {
            throw new Error(ERROR_HEAD);
        }

        return carsList;
    }
}

export default Init;
