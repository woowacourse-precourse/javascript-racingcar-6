import { MissionUtils } from "@woowacourse/mission-utils"

export const racingOutput = (cars, count) => {
    MissionUtils.Console.Print("실행결과");
    for ( let round = 0; round <= count; round++ ) {
        let output = '';
        output += `${car}: ${'-'.repeat(cars[car])}\n`;
    }
    MissionUtils.Console.Print(output);
}