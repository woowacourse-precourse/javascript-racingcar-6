import {MissionUtils} from "@woowacourse/mission-utils";
import {makeAndFilter} from "./Random.js";

class App {
    async play() {
        const NAMES = (await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"));
        const NAME_ARR = NAMES.split(',');
        const FORWARD_ARR = [...NAME_ARR].fill(0);
        const ROUND = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
        MissionUtils.Console.print("\n실행 결과");
        let cnt = 1;
        while (cnt <= ROUND) {
            let outString = ``;
            let FORWARD_MARK = "-"
            makeAndFilter(FORWARD_ARR.length).forEach((VALUE, INDEX) => {
                FORWARD_ARR[INDEX] += VALUE;
            });
            for (let i = 0; i < NAME_ARR.length; i++) {
                outString += `${NAME_ARR[i]} : ${FORWARD_MARK.repeat(FORWARD_ARR[i])}\n`;
            }
            MissionUtils.Console.print(outString);
            cnt++;
        }
        let max = -1;
        for (let i = 0; i < FORWARD_ARR.length; i++) {
            if (FORWARD_ARR[i] > max) {
                max = FORWARD_ARR[i];
            }
        }
        let RESULT_ARRAY = [];
        FORWARD_ARR.forEach((VALUE, INDEX) => {
            if (VALUE === max) {
                RESULT_ARRAY.push(NAME_ARR[INDEX]);
            }
        });
        MissionUtils.Console.print(`최종 우승자 : ${RESULT_ARRAY.join(',')}`);
    }

}

export default App;
