import { Console } from '@woowacourse/mission-utils';
import { CAR_NAME_INPUT_MESSAGE } from './Define';
class App {
    async play() {
        const CAR_NAMES_INPUT = await Console.readLineAsync(CAR_NAME_INPUT_MESSAGE);
    }
}

export default App;
