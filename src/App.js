import { Console } from '@woowacourse/mission-utils';
import {
    CAR_NAME_INPUT_MESSAGE,
    RACE_TIME_INPUT_MESSAGE,
} from './Define';
import {
    VALIDATE_CAR_NAME,
    CREATE_CARS,
} from './Race';

class App {
    async play() {
        const CAR_NAMES_INPUT = await this.getCarNames();
        const CARS = CREATE_CARS(CAR_NAMES_INPUT);
        const RACE_TIME_INPUT = await this.getRaceTimes();
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
