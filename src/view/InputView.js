import { INFO_MESSAGES } from "../constant.js";
import { MissionUtils } from "@woowacourse/mission-utils";

export default class InputView {
    async readCarNames() {
        return this.readLine(INFO_MESSAGES.CAR_NAME);
    }

    async readNumberOfTry() {
        return this.readLine(INFO_MESSAGES.NUM_OF_TRY);
    }

    async readLine(message) {
        try {
            return await MissionUtils.Console.readLineAsync(`${message}\n`);
        } catch (error) {
            MissionUtils.Console.print(error)
        }
    }

    
}