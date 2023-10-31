import {MissionUtils} from "@woowacourse/mission-utils";
import {
    MAX_RANDOM_RANGE,
    MIN_RANDOM_RANGE,
    MOVE_FORWARD_NUMBER,
    NEWLINE,
    SHOW_PROGRESS_TITLE,
    SHOW_WINNER_TITLE,
} from "./constants.js";

class Game {
    constructor() {
        this.carsList = [];
        this.carProgresses = [];
    }

    initializeGame(carsList) {
        this.carsList = carsList;
        this.carProgresses = new Array(carsList.length).fill("");
    }

    startRacing(carsList, playCount) {
        this.initializeGame(carsList);

        MissionUtils.Console.print(SHOW_PROGRESS_TITLE);

        for (let turn = 0; turn < playCount; turn++) {
            this.racing();
            this.printGameProgress();
        }

        this.showWinner();
    }
    
    racing() {
        this.carsList.forEach((car, idx) => {
            const carRandomNumber = this.generateRandomNumber();

            if (carRandomNumber >= MOVE_FORWARD_NUMBER) {
                this.carProgresses[idx] += "-";
            }
        });
    }

    getWinner() {
        const maxDistance = Math.max(...this.carProgresses.map((progress) => progress.length));
        const winnerList = this.carsList.filter((_, idx) => this.carProgresses[idx].length === maxDistance);
        return winnerList;
    }

    showWinner() {
        const winnerList = this.getWinner();
        const winnerString = winnerList.join(",");

        MissionUtils.Console.print(SHOW_WINNER_TITLE + winnerString);

    }

    printGameProgress() {
        this.carsList.forEach((car, idx) => {
            MissionUtils.Console.print(car + " : " + this.carProgresses[idx]);
        });

        MissionUtils.Console.print(NEWLINE);
    }

    generateRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_RANGE, MAX_RANDOM_RANGE);
    }
}

export default Game;
