import {MissionUtils} from "@woowacourse/mission-utils";
import INPUT_CHECK from "./Validate.js";
import {INPUT_MESSAGE} from "./Constants.js";

export const Input_First = async () => {
    const NAMES = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.FIRST_Q);
    const NAME_ARR = NAMES.split(',');
    INPUT_CHECK.check_overlap(NAME_ARR);
    INPUT_CHECK.check_length(NAME_ARR);
    INPUT_CHECK.check_void(NAME_ARR);
    return NAME_ARR;
};

export const Input_Second = async () => {
    const COUNT = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.SECOND_Q);
    INPUT_CHECK.check_isNAN(COUNT);
    INPUT_CHECK.check_int(COUNT)
    return parseInt(COUNT);
};