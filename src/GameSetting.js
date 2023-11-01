import {Console} from '@woowacourse/mission-utils'
import { PLAYER_INPUT_MESSAGE } from './constatns/gameConstant'
import {Validation} from './validation'

class GameSetting {
    static async getCarsName() {
        const cars_name = await Console.readLineAsync(PLAYER_INPUT_MESSAGE.CAR_NAME_PROMPT);
        const car_name_array = cars_name.split(',');
        if(Validation.isPlayerInputValidate(car_name_array)){
            return [...car_name_array];
        }
    }
}