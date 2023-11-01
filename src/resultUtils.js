import { Console } from "@woowacourse/mission-utils";

// 승자 출력
export function winners(carMap, highestScore) {
    const carWin = [];
    carMap.forEach((value, key) => {
        if (value.length === highestScore) {
            carWin.push(key);
        }
    });
    Console.print(`최종 우승자 : ${carWin.join(",")}`);
}