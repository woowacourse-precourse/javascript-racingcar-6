import {Random, Console} from '@woowacourse/mission-utils';
import { CONSTANTS, GAME_MESSAGE } from './constants/gameConstant.js';
class GameMainLogic{
    static isGoForward(){
        const randomNumber = Random.pickNumberInRange(CONSTANTS.MIN_VALUE, CONSTANTS.MAX_VALUE);
        return randomNumber >= CONSTANTS.GO_FORWAD;
    }

    static roundLogic(playersData){
        Console.print(`roundLogic : ${playersData}`)
        return playersData.forEach(player => {
            if(this.isGoForward()){
                const updatePosition = player.position++;
                return {...player, updatePosition};
            }
            return player;
        })
    }

    static printRoundResult(playersData){
        Console.print(`print : ${playersData}`)
        let result = '';
        playersData.forEach(player => {
            result += `${player.carName} : ${GAME_MESSAGE.PROGRESS_ICON.repeat(player.position)}\n`;
        })
        Console.print(result);
    }


}

export default GameMainLogic