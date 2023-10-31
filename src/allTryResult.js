import checkAllScore from "./checkAllScore.js";
import { MissionUtils } from "@woowacourse/mission-utils";

function allTryResult(carName, tryNumber, allScore) {
    MissionUtils.Console.print("실행 결과");
    for (let i = 0; i < tryNumber; i++) {
        allScore = checkAllScore(carName, allScore);
    }
    return allScore;
}

export default allTryResult;