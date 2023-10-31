import { MissionUtils } from "@woowacourse/mission-utils";
import { INFO_MESSAGES } from "../constant.js";

export default class OutputView {
    printMessage(message) {
        MissionUtils.Console.print(`${message}`);
    }

    printRaceResultMessage() {
        MissionUtils.Console.print(`${INFO_MESSAGES.RACE_RESULT}`);
    }

    printPoints(message) {
        MissionUtils.Console.print(`${message}`);
    }

    printResult() {
        // 경주 완료 출력
    }
}