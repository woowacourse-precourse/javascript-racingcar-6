import { MissionUtils } from "@woowacourse/mission-utils";
import { getCarData } from "../data/car_data.js";

const printCarData = () => {
    let carData = getCarData();
    for (let car in carData) {
        MissionUtils.Console.print(car + ' : ' + '-'.repeat(carData[car]));
    }
    MissionUtils.Console.print('');

};

export default printCarData;