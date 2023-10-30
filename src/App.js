import { Console } from '@woowacourse/mission-utils';
import { CAR_NAME_INPUT_MESSAGE } from './Define';
import { VALIDATE_CAR_NAME } from './Race';

class App {
    async play() {
        const CAR_NAMES_INPUT = await this.getCarNames();
    }

    async getCarNames() {
        const CAR_NAME_INPUT = await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
        VALIDATE_CAR_NAME(CAR_NAME_INPUT);
        return CAR_NAME_INPUT.split(',').map(name => name.trim());
    }
}

export default App;
