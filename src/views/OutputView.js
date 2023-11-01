import { MissionUtils } from "@woowacourse/mission-utils"

export const racingOutput = (data) => {
    if (typeof data === 'string') {
        MissionUtils.Console.print(data);
    } else {
        Object.entries(data).forEach(([carName, dash]) => {
            MissionUtils.Console.print(`${carName} : ${dash}`);
        });
    }
};