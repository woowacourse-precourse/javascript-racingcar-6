import { Console, MissionUtils } from "@woowacourse/mission-utils"

export const racingOutput = (carObject) => {
    if (typeof carObject === 'string') {
        MissionUtils.Console.print(carObject);
    } else {
        Object.entries(carObject).forEach(([carName, dash]) => {
            MissionUtils.Console.print(`${carName} : ${dash}`);
        });
    }
};

export const printWinner = (winner) => {
    MissionUtils.Console.print("최종 우승자 : " + winner);
};