import {MissionUtils} from "@woowacourse/mission-utils";
import INPUT_CHECK from "./Validate.js";

export const Input_First = async () => {
    const FIRST_Q = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    const NAMES = await MissionUtils.Console.readLineAsync(FIRST_Q);
    const NAME_ARR = NAMES.split(',');
    INPUT_CHECK.check_overlap(NAME_ARR);
    INPUT_CHECK.check_length(NAME_ARR);
    INPUT_CHECK.check_void(NAME_ARR);
    return NAME_ARR;
};

export const Input_Second = async () => {
    const SECOND_Q = "시도할 횟수는 몇 회인가요?\n"
    const COUNT = await MissionUtils.Console.readLineAsync(SECOND_Q);
    INPUT_CHECK.check_isNAN(COUNT);
    INPUT_CHECK.check_int(COUNT)
    return parseInt(COUNT);
};