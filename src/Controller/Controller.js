import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../Models/OutputMsg';
import { CONSTANTS } from '../Models/Constants';

class Controller {

    async inputVehicleName() {
        try {
            const VEHICLE_NAME = await Console.readLineAsync(OUTPUT_MSG.INPUT_VEHICLE_NAME);
            CONSTANTS.vehicleNameList = VEHICLE_NAME.split(',');
        } catch (error) {
            throw error;
        }
    }

    async inputPlayTimes() {
        try {
            CONSTANTS.gamePlayTimes = await Console.readLineAsync(OUTPUT_MSG.INPUT_PLAY_TIME);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = Controller;