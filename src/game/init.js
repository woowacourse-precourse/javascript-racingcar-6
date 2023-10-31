import {MissionUtils} from "@woowacourse/mission-utils";
import {
    ERROR_DUPLICATED_CARS,
    ERROR_HEAD,
    ERROR_INVALID_CAR_NAME,
    ERROR_INVALID_PLAY_COUNT,
    ERROR_WITHOUT_SPLIT_MARK,
    INPUT_CARS_STRING,
    INPUT_PLAY_COUNT_STRING,
    NEWLINE,
    SPLIT_MARK
} from "./constants.js";

import {carNameValidator, carsListValidator, carStringValidator, playCountValidator} from "./validator.js";
import Game from "./game.js";

class Init {
    async getUserInput() {
        const carNames = await this.inputCarNames();
        const carsList = this.makeCarsList(carNames);

        const playCount = await this.inputPlayCount();

        this.startGame(carsList, playCount);
    }

    async inputCarNames() {
        MissionUtils.Console.print(INPUT_CARS_STRING);
        const carNames = await MissionUtils.Console.readLineAsync('');

        if (!carStringValidator(carNames)) {
            throw new Error(ERROR_HEAD + ERROR_WITHOUT_SPLIT_MARK);
        }

        return carNames;
    }

    async inputPlayCount() {
        MissionUtils.Console.print(INPUT_PLAY_COUNT_STRING);
        const playCount = await MissionUtils.Console.readLineAsync('');

        if (!playCountValidator(playCount)) {
            throw new Error(ERROR_HEAD + ERROR_INVALID_PLAY_COUNT);
        }

        return playCount;
    }

    startGame(carsList, playCount) {
        MissionUtils.Console.print(NEWLINE);
        const game = new Game();
        return game.startRacing(carsList, playCount);
    }

    makeCarsList(carNames) {
        const carsList = carNames.split(SPLIT_MARK).map(carName => carName.trim());

        const isCarNameValid = carsList.every(carName => carNameValidator(carName));
        const isCarsListValid = carsListValidator(carsList)

        if (!isCarNameValid) {
            throw new Error(ERROR_HEAD + ERROR_INVALID_CAR_NAME);
        }
        if (!isCarsListValid) {
            throw new Error(ERROR_HEAD + ERROR_DUPLICATED_CARS);
        }

        return carsList;
    }
}

export default Init;
