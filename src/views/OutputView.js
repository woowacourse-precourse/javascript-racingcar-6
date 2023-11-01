import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';

class OutputView {

    inputVehicleMsg () {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
    }

    vehicleName(vehicleName) {
        Console.print(vehicleName.join(','));
    }

    inputPlayTimeMsg () {
        Console.print(OUTPUT_MSG.INPUT_PLAY_TIME);
    }

    gamePlayTime(playTime) {
        Console.print(playTime);
    }

    moveProcedure(vehicleNameList,moveProcedure) {
        vehicleNameList.forEach((vehicleName) => {
            Console.print(`${vehicleName} : ${moveProcedure[vehicleName]}`);
        });
    }

    result(champion) {
        Console.print(`${OUTPUT_MSG.WINNER_IS} ${champion.join(', ')}`);
    }

}

export default OutputView;