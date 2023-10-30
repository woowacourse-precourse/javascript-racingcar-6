import {MissionUtils} from "@woowacourse/mission-utils";
import {NEWLINE, SHOW_EXECUTION_TITLE} from "./constants.js";

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
            // this.racing();
            this.carsList.map((car, idx) => {
                MissionUtils.Console.print(car + " : " + this.carProgressive[idx]);
            })
            MissionUtils.Console.print(NEWLINE);
        }
        // this.showWinner();
    }
}

export default Game;
