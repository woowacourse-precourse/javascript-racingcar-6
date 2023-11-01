import { GAME_MESSAGE } from '../constants/gameMessage';
import { MissionUtils } from '@woowacourse/mission-utils';

class User {
    async inputCarNames() {
        const carNames = await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputCarNames);
        return this.splitCarNames(carNames);
    }

    async inputGameCount() {
        return await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputGameCount);
    }

    splitCarNames(carNames) {
        return carNames.split(',');
    }
}

export default new User();