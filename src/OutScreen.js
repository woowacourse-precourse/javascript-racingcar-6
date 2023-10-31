import {MissionUtils} from "@woowacourse/mission-utils";
import Play_Game from "./Play_Game.js";
import CHECK_WINNER from "./Check_Winner.js";
import {RESULT_MESSAGE} from "./Constants.js";


const GAME_RESULT = (NAME, NUM) => {
    let RESULT_ARRAY = [...NAME].fill(0);
    let cnt = 1;
    MissionUtils.Console.print(RESULT_MESSAGE.RESULT_OUT);
    while (cnt <= NUM) {
        RESULT_ARRAY = Play_Game(NAME,RESULT_ARRAY);
        cnt++;
    }
    const WINNER = CHECK_WINNER(NAME, RESULT_ARRAY);
    const WINNER_OUT = `최종 우승자 : ${WINNER.join(", ")}`
    MissionUtils.Console.print(WINNER_OUT);
};
export default GAME_RESULT;