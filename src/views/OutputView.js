import { Console, MissionUtils } from "@woowacourse/mission-utils"

export const racingOutput = (data) => {
    if (typeof data === 'string') {
        MissionUtils.Console.print(data);
    } else {
        Object.entries(data).forEach(([carName, dash]) => {
            MissionUtils.Console.print(`${carName} : ${dash}`);
        });
    }
};

export const showWinner = (winner) => {
    MissionUtils.Console.print(`최종 우승자 : ${winner}`);
};