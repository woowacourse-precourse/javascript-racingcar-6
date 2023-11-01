import {Console} from '@woowacourse/mission-utils'
import { PLAYER_INPUT_MESSAGE } from './constants/GameConstant.js';
import Validation from './validation.js';

class GameSetting {
    static async getCarsName() {
        const cars_name = await Console.readLineAsync(PLAYER_INPUT_MESSAGE.CAR_NAME_PROMPT);
        const car_name_array = cars_name.split(',');
        if(Validation.isCarNameValidate(car_name_array)){
            return [...car_name_array];
        }
    }

    static async getRound() {
        const round = await Console.readLineAsync(PLAYER_INPUT_MESSAGE.ROUND_PLAY_NUMBER_PROMPT);
        if(Validation.isRoundValidate(round)){
            return Number(round);
        }
    }

    static async getPlayersData(players) {
        const playersData = players.map(carName=>({
            carName, position:0,
        }))
        return playersData;
    }
}

export default GameSetting;