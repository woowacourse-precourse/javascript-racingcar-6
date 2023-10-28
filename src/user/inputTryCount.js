import { MissionUtils } from "@woowacourse/mission-utils";
import { inputTryCountMessage } from "../constant/inputMessage";
import { isValidTryCount } from "./validation";

export default async function inputTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(inputTryCountMessage);
    isValidTryCount(tryCount);

    return tryCount;
}
