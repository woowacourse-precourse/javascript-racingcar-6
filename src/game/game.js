import {MissionUtils} from "@woowacourse/mission-utils";
import {
    MAX_RANDOM_RANGE,
    MIN_RANDOM_RANGE,
    MOVE_FORWARD_NUMBER,
    NEWLINE,
    SHOW_EXECUTION_TITLE,
    SHOW_WINNER_TITLE,
} from "./constants.js";

class Game {
    constructor() {
        this.carsList = [];
        this.carProgressive = [];
    }

    startRacing(carsList, playCount) {
        this.initializeGame(carsList);

        MissionUtils.Console.print(SHOW_EXECUTION_TITLE);

        for (let i = 0; i < playCount; i++) {
            this.racing();
            this.printGameProgress();
        }

        this.showWinner();
    }

    initializeGame(carsList) {
        this.carsList = carsList;
        this.carProgressive = new Array(carsList.length).fill("");
    }

    racing() {
        this.carsList.forEach((car, idx) => {
            const carRandomNumber = this.generateRandomNumber();

            if (carRandomNumber >= MOVE_FORWARD_NUMBER) {
                this.carProgressive[idx] += "-";
            }
        });
    }

    getWinner() {
        const maxDistance = Math.max(...this.carProgressive.map((progress) => progress.length));
        const winnerList = this.carsList.filter((_, idx) => this.carProgressive[idx].length === maxDistance);
        return winnerList;
    }

    showWinner() {
        const winnerList = this.getWinner();
        const winnerString = winnerList.join(",");
        
        MissionUtils.Console.print(SHOW_WINNER_TITLE + winnerString);

    }

    printGameProgress() {
        this.carsList.forEach((car, idx) => {
            MissionUtils.Console.print(car + " : " + this.carProgressive[idx]);
        });

        MissionUtils.Console.print(NEWLINE);
    }

    generateRandomNumber = () => {
        return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_RANGE, MAX_RANDOM_RANGE);
    }
}

export default Game;
