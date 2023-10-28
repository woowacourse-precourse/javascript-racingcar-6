import {MissionUtils} from "@woowacourse/mission-utils";
import {makeAndFilter} from "./Random.js";

let FORWARD_ARR= [];
const ON_GAME = (NAME) => {
    let outString = ``;
    const FORWARD_MARK = "-"
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
            WINNER.push(NAME[INDEX]);
        }
    });

    return WINNER;
};
export const GAME_RESULT = (NAME, NUM) => {
    const RESULT_OUT = "\n실행 결과"
    let RESULT_ARRAY = [];
    let cnt = 1;
    FORWARD_ARR = [...NAME].fill(0);
    MissionUtils.Console.print(RESULT_OUT);
    while (cnt <= NUM) {
        RESULT_ARRAY = ON_GAME(NAME);
        cnt++;
    }
    const WINNER_OUT = `최종 우승자 : ${RESULT_ARRAY.join(',')}`
    MissionUtils.Console.print(WINNER_OUT);
};