import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidName } from "./validation";
import { INPUT_CAR_NAME_MESSAGE } from "../constant/inputMessage";

/**
 * 자동차 이름 입력 함수(문자열)
 * @returns 문자열로 받은 값을 , 단위로 나누어 배열로 반환
 */
export default async function inputCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(INPUT_CAR_NAME_MESSAGE);
    const  separateCarName = carNames.split(",");
    isValidName(separateCarName);
    return separateCarName;
}
