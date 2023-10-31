import { MissionUtils } from "@woowacourse/mission-utils";
import { inputTryCountMessage } from "../constant/inputMessage";
import { isValidTryCount } from "./validation";

/**
 * 게임 시도 횟수 입력 함수
 * @returns 게임 시도 횟수 숫자 반환
 */
export default async function inputTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(inputTryCountMessage);
    isValidTryCount(tryCount);

    return tryCount;
}
