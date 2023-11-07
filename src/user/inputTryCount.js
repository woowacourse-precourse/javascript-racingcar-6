import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_TRY_COUNT_MESSAGE } from "../constant/inputMessage";
import { isValidTryCount } from "./validation";

/**
 * 게임 시도 횟수 입력 함수
 * @returns 게임 시도 횟수 숫자 반환
 */
export default async function inputTryCount() {
    const tryCount = await MissionUtils.Console.readLineAsync(INPUT_TRY_COUNT_MESSAGE);
    isValidTryCount(tryCount);

    return tryCount;
}
