import {MissionUtils} from "@woowacourse/mission-utils";
import {PLAY_GAME} from "./Play_Game.js";
import {CHECK_WINNER} from "./Check_Winner.js";


export const GAME_RESULT = (NAME, NUM) => {
    const RESULT_OUT = "\n실행 결과"
    let RESULT_ARRAY = [...NAME].fill(0);
    let cnt = 1;
    MissionUtils.Console.print(RESULT_OUT);
    while (cnt <= NUM) {
        RESULT_ARRAY = PLAY_GAME(NAME,RESULT_ARRAY);
        cnt++;
    }
    const WINNER = CHECK_WINNER(NAME, RESULT_ARRAY);
    const WINNER_OUT = `최종 우승자 : ${WINNER.join(', ')}`
    MissionUtils.Console.print(WINNER_OUT);
};