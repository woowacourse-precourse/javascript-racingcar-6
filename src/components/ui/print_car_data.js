import { MissionUtils } from "@woowacourse/mission-utils";
import { carDataGet } from "../data/car_data.js";

const printCarData = () => {
    let carData = carDataGet();
    for (let car in carData) {
        MissionUtils.Console.print(car + ' : ' + '-'.repeat(carData[car]));
    }
    MissionUtils.Console.print('');

};

export default printCarData;