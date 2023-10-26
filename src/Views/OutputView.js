import { CONSTANTS } from '../models/Constants';
import { Console } from '@woowacourse/mission-utils';

class OutputView {
    printMoveProcedure() {
        CONSTANTS.vehicleNameList.forEach((vehicleName) => {
            Console.print(`${vehicleName} : ${CONSTANTS.moveProcedure[vehicleName]}`);
        })
    }

}

export default OutputView;