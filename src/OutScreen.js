import {MissionUtils} from "@woowacourse/mission-utils";

export const GAME_RESULT = (NAME, NUM) => {
    const RESULT_OUT = "\n실행 결과"
    MissionUtils.Console.print(RESULT_OUT);
    let cnt = 1;
    let RESULT_ARRAY = [];
    while (cnt <= NUM) {
        RESULT_ARRAY = ON_GAME(NAME);
        cnt++;
    }

    MissionUtils.Console.print(`최종 우승자 : ${RESULT_ARRAY.join(',')}`);
};