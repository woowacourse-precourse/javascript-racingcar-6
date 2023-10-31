import {makeAndFilter} from "./Random.js";
import {MissionUtils} from "@woowacourse/mission-utils";

export const PLAY_GAME = (NAME, FORWARD_ARR) => {
    let outString = ``;
    const FORWARD_MARK = "-"
    makeAndFilter(FORWARD_ARR.length).forEach((VALUE, INDEX) => {
        FORWARD_ARR[INDEX] += VALUE;
    });
    for (let i = 0; i < NAME.length; i++) {
        outString += `${NAME[i]} : ${FORWARD_MARK.repeat(FORWARD_ARR[i])}\n`;
    }
    MissionUtils.Console.print(outString);
    return FORWARD_ARR;
};