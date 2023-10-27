import { CONSTANTS } from '../constants/Constants';
import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/OutputMsg';

class OutputView {

    printInputVehicleMsg () {
        Console.print(OUTPUT_MSG.INPUT_VEHICLE_NAME);
    }

    printVehicleName() {
        Console.print(CONSTANTS.vehicleNameList.join(','));
    }

    printInputPlayTimeMsg () {
        Console.print(OUTPUT_MSG.INPUT_PLAY_TIME);
    }

    printGamePlayTime() {
        Console.print(CONSTANTS.gamePlayTimes);
    }

    printMoveProcedure() {
        CONSTANTS.vehicleNameList.forEach((vehicleName) => {
            Console.print(`${vehicleName} : ${CONSTANTS.moveProcedure[vehicleName]}`);
        })
    }

    printResult() {
        Console.print(`${OUTPUT_MSG.WINNER_IS} ${CONSTANTS.champion.join(', ')}`);
    }

}

export default OutputView;