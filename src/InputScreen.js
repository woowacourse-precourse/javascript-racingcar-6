import {MissionUtils} from "@woowacourse/mission-utils";

export const Input_First = async () => {
    const FIRST_Q = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    const NAMES = (await MissionUtils.Console.readLineAsync(FIRST_Q));
    const NAME_ARR = NAMES.split(',');
    const SET_NAME = new Set(NAME_ARR);
    if (SET_NAME.size !== NAME_ARR.length) throw new Error("[ERROR] 중복된 이름을 입력")
    NAME_ARR.forEach(v => {
        if (v.length > 5) throw new Error("[ERROR] 이름 숫자는 5이하만 가능합니다.")
    })
    return NAME_ARR;
};

export const Input_Second = async () => {
    const SECOND_Q = "시도할 횟수는 몇 회인가요?\n"
    const COUNT = await MissionUtils.Console.readLineAsync(SECOND_Q);
    if (isNaN(COUNT)) throw new Error("[ERROR] 숫자만 입력해주세요");
    return COUNT;
};