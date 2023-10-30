import { Console } from '@woowacourse/mission-utils';
import { CAR_NAME_INPUT_MESSAGE } from './Define';
import {
    VALIDATE_CAR_NAME,
    CREATE_CARS,
} from './Race';

class App {
    async play() {
        const CAR_NAMES_INPUT = await this.getCarNames();
        const CARS = CREATE_CARS(CAR_NAMES_INPUT);
    }

    async getCarNames() {
        const CAR_NAME_INPUT = await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
        VALIDATE_CAR_NAME(CAR_NAME_INPUT);
        return CAR_NAME_INPUT.split(',').map(name => name.trim());
    }
}

export default App;
