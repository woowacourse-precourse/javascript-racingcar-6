import { MissionUtils } from "@woowacourse/mission-utils";
import { setCarData } from "../data/car_data.js";
import printCarData from "./print_car_data.js";

const printExecution = (attempsNumber) => {
    MissionUtils.Console.print("\n실행 결과");

    for (let attempt = 0; attempt < attempsNumber; attempt++) {
        setCarData();
        printCarData();
    }
};

export default printExecution;