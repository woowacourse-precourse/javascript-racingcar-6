import { ERROR_MESSAGE } from '../constants/errorMessage.js';
import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default class User {

    async inputForGame() {
        const carNames = await this.inputCarNames();
        const count = await this.inputGameCount();

        return { carNames, count };
    }

    async inputCarNames() {
        const carNames = await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputCarNames);
        
        return this.splitCarNames(carNames);
    }

    splitCarNames(carNames) {
        this.checkInputCarNamesError(carNames.split(','));

        return carNames.split(',');
    }

    checkInputCarNamesError(carNames) {
        carNames.forEach(name => {
            if (name === '' || name === ' ') {
                throw new Error(ERROR_MESSAGE.carNameNotEmptyException);
            }
            
            if (name.length > 5) {
                throw new Error(ERROR_MESSAGE.carNameLengthOutOf5Exception);
            }
        });
    }

    async inputGameCount() {
        const count = await MissionUtils.Console.readLineAsync(GAME_MESSAGE.inputGameCount);
        this.checkInputGameCountError(count);

        return count;
    }

    checkInputGameCountError(count) {
        if (Number.isNaN(count)) {
            throw new Error(ERROR_MESSAGE.numberFormatException);
        }
    }
}