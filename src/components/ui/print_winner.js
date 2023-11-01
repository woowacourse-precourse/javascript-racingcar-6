import { MissionUtils } from "@woowacourse/mission-utils";
import winnerDetermine from "../logic/winner_determine.js";

const printWinner = (carData) => {
    let winner = winnerDetermine(carData);
    MissionUtils.Console.print('최종 우승자 : ' + winner);
};

export default printWinner;