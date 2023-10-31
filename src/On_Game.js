import {MissionUtils} from "@woowacourse/mission-utils";
import {RESULT_MESSAGE} from "./Constants.js";
import makeAndFilter from "./Random.js";

const ON_GAME = (NAME, FORWARD_ARR) => {
    let outString = ``;
    makeAndFilter(FORWARD_ARR.length).forEach((VALUE, INDEX) => {
        FORWARD_ARR[INDEX] += VALUE;
    });
    for (let i = 0; i < NAME.length; i++) {
        outString += `${NAME[i]} : ${RESULT_MESSAGE.FORWARD_MARK.repeat(FORWARD_ARR[i])}\n`;
    }
    MissionUtils.Console.print(outString);
    return FORWARD_ARR;
};
export default ON_GAME;