import { MissionUtils } from "@woowacourse/mission-utils";
import { INFO_MESSAGES } from "../constant.js";

export default class OutputView {
    printMessage(message) {
        MissionUtils.Console.print(`${message}`);
    }

    printWinners(winnerMessage) {
        MissionUtils.Console.print(`${INFO_MESSAGES.WINNER} ${winnerMessage}`);
    }
}