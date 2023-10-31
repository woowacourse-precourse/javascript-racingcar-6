import { Console } from '@woowacourse/mission-utils';
import {
    CAR_NAME_INPUT_MESSAGE,
    RACE_TIME_INPUT_MESSAGE,
    ERROR_HEAD_MESSAGE,
} from './Define';
import {
    VALIDATE_CAR_NAME,
    VALIDATE_RACE_TIME,
    CREATE_CARS,
    RACE_RUN,
    FIND_WINNERS,
    PRINT_WINNERS,
} from './Race';

class App {
    async play() {
        try {
            const CAR_NAMES_INPUT = await this.getCarNames();
            const RACE_TIME_INPUT = await this.getRaceTimes();
            const CARS = CREATE_CARS(CAR_NAMES_INPUT);

            RACE_RUN(CARS, RACE_TIME_INPUT);

            const WINNERS = FIND_WINNERS(CARS);
            PRINT_WINNERS(WINNERS);
        } catch (ERROR) {
            throw new Error(`${ERROR_HEAD_MESSAGE} ${ERROR.message}`);
        }
    }

    async getCarNames() {
        const CAR_NAME_INPUT = await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
        VALIDATE_CAR_NAME(CAR_NAME_INPUT);
        return CAR_NAME_INPUT.split(',').map(name => name.trim());
    }

    async getRaceTimes() {
        const RACE_TIME_INPUT = await Console.readLineAsync(RACE_TIME_INPUT_MESSAGE);
        return VALIDATE_RACE_TIME(RACE_TIME_INPUT);
    }
}

export default App;
