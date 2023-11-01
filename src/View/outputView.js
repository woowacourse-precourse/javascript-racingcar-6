import { MissionUtils } from "@woowacourse/mission-utils";
import { ERROR, MESSAGE } from "../Utils/Message";

const outputView = {
    gameStrat(){
        MissionUtils.Console.print(MESSAGE.START);
    },

    printError(){
        MissionUtils.Console.print(ERROR);
    },

    printProcess(carList){
        Object.keys(carList).forEach((car)=>{
            MissionUtils.Console.print(`${car} : ${"-".repeat(carList[car])}`);
        })
        MissionUtils.Console.print("");
    },

    printResultTitle(){
        MissionUtils.Console.print(MESSAGE.RESULT_TITLE);
    },

    printResult(winner){
        MissionUtils.Console.print(`${MESSAGE.RESULT}${winner.join(", ")}`);
    }
}

module.exports = outputView;