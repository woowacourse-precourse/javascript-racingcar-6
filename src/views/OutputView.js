import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';

class OutputView {

    printInputVehicleMsg () {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
    }

    printVehicleName(vehicleName) {
        Console.print(vehicleName.join(','));
    }

    printInputPlayTimeMsg () {
        Console.print(OUTPUT_MSG.INPUT_PLAY_TIME);
    }

    printGamePlayTime(playTime) {
        Console.print(playTime);
    }

    printMoveProcedure(vehicleNameList,moveProcedure) {
        vehicleNameList.forEach((vehicleName) => {
            Console.print(`${vehicleName} : ${moveProcedure[vehicleName]}`);
        });
    }

    printResult(champion) {
        Console.print(`${OUTPUT_MSG.WINNER_IS} ${champion.join(', ')}`);
    }

}

export default OutputView;