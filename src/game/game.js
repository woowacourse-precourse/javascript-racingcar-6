import {MissionUtils} from "@woowacourse/mission-utils";
import {MAX_RANDOM_RANGE, MIN_RANDOM_RANGE, MOVE_FORWARD_NUMBER, NEWLINE, SHOW_EXECUTION_TITLE} from "./constants.js";

class Game {
    constructor() {
        this.carsList = [];
        this.carProgressive = [];
    }

    startRacing(carsList, playCount) {
        this.carsList = carsList; // carsList 업데이트
        this.carProgressive = new Array(carsList.length).fill('');

        MissionUtils.Console.print(SHOW_EXECUTION_TITLE);

        for (let i = 0; i < playCount; i++) {
            this.racing();
            this.carsList.map((car, idx) => {
                MissionUtils.Console.print(car + " : " + this.carProgressive[idx]);
            })
            MissionUtils.Console.print(NEWLINE);
        }
        // this.showWinner();
    }

    racing() {
        this.carsList.map((car, idx) => {
            const carRandomNumber = this.generateRandomNumber();
            if (carRandomNumber >= MOVE_FORWARD_NUMBER) {
                this.carProgressive[idx] += "-";
            }
        })

    }

    generateRandomNumber = () => {
        return MissionUtils.Random.pickNumberInRange(MIN_RANDOM_RANGE, MAX_RANDOM_RANGE);
    }
}

export default Game;
