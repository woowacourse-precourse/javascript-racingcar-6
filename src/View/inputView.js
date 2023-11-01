import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Utils/Message";

const inputView = {
    inputCarNames(input){
        MissionUtils.Console.readLineAsync(`${MESSAGE.START}${input}`);
    },

    inputAttempt(input){
        MissionUtils.Console.readLineAsync(`${MESSAGE.ATTEMPT}${input}`);
    }
}

module.exports = inputView;
