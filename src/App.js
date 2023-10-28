import {MissionUtils} from "@woowacourse/mission-utils";
import {makeAndFilter} from "./Random.js";
import {Input_First, Input_Second} from "./InputScreen.js";
import {GAME_RESULT} from "./OutScreen.js";

class App {
    async play() {

        const NAME_ARRAY = await Input_First();
        const COIN = await Input_Second();
        const FORWARD_ARR = [...NAME_ARRAY].fill(0);
        const ON_GAME = (NAME) => {
            let outString = ``;
            let FORWARD_MARK = "-"
            let max = -1;
            let WINNER = [];
            makeAndFilter(FORWARD_ARR.length).forEach((VALUE, INDEX) => {
                FORWARD_ARR[INDEX] += VALUE;
            });
            for (let i = 0; i < NAME.length; i++) {
                outString += `${NAME[i]} : ${FORWARD_MARK.repeat(FORWARD_ARR[i])}\n`;
            }
            MissionUtils.Console.print(outString);
            FORWARD_ARR.forEach(v => {
                if (v > max) {
                    max = v;
                }
            });
            FORWARD_ARR.forEach((VALUE, INDEX) => {
                if (VALUE === max) {
                    WINNER.push(NAME_ARRAY[INDEX]);
                }
            });
            return WINNER;
        };


        GAME_RESULT(NAME_ARRAY, COIN);
    }

}

export default App;
