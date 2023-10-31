import { MissionUtils } from "@woowacourse/mission-utils";
import carAdvanceCount from "./carAdvanceCount.js";

function checkAllScore(carName, allScore) {
    for (let i = 0; i < carName.length; i++) {
      allScore[i] = carAdvanceCount(allScore[i]);
      MissionUtils.Console.print(carName[i] + " : " + allScore[i]);      
    }
    MissionUtils.Console.print("");
    return allScore;
}

export default checkAllScore;
