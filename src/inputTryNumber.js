import { MissionUtils } from "@woowacourse/mission-utils";

async function inputTryNumber() {
    let tryNumber = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    MissionUtils.Console.print("");
    tryNumber = Number(tryNumber);
    return tryNumber;
}

export default inputTryNumber;