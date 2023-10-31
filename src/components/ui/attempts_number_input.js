import { MissionUtils } from "@woowacourse/mission-utils";
import attemptsNumberValidation from "../logic/attempts_number_validation.js";

async function attemptsNumberInput() {
    const attemptsNumber = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회 인가요?\n");
    attemptsNumberValidation(attemptsNumber);
    return attemptsNumber;
};

export default attemptsNumberInput;