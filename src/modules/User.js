import { GAME_MESSAGE } from '../constants/gameMessage';
import { MissionUtils } from '@woowacourse/mission-utils';

class User {
    async inputCarNames() {
        return await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputCarNames);
    }

    async inputGameCount() {
        return await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputGameCount);
    }
}

export default new User();