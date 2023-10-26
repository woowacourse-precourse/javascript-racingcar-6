import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../Models/OutputMsg';
import { CONSTANTS } from '../Models/Constants';

class Controller {

    async inputVehicleName() {
        try {
            CONSTANTS.vehicleName = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            Console.print(CONSTANTS.vehicleName);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Controller;