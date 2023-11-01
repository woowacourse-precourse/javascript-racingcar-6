import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarData, setCarData } from "../data/car_data.js";
import printCarData from "./print_car_data.js";
import printWinner from "./print_winner.js";

const printExecution = (attempsNumber) => {
    MissionUtils.Console.print("\n실행 결과");

    for (let attempt = 0; attempt < attempsNumber; attempt++) {
        setCarData();
        printCarData();
    }
    printWinner(getCarData());
};

export default printExecution;