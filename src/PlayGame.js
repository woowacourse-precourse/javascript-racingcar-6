import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "./UserInput.js";

class PlayGame {
    constructor() {
        this.UserInput = new UserInput();
    }

    setRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }

    async getRandomNumber(CarNames, count) {
        let carRandom = new Array();
        // 랜덤숫자 생성
        for(let i=0;i<CarNames.length;i++) {
            carRandom.push(this.setRandomNumber());
            if(carRandom[i]>3) {
                count[i]++;
            }
        }
        return count;
    }

    async displayResult(CarNames, count) {
        for(let j=0;j<CarNames.length;j++) {
            MissionUtils.Console.print(CarNames[j] + ' : ' + '-'.repeat(count[j]));
        }
    }

    async pickWinner(CarNames, count) {
        const max = Object.keys(count).reduce(function(m, k){ return count[k] > m ? count[k] : m }, -Infinity);
        let winner = new Array();
        for(let i=0;CarNames.length;i++){
            if(count[i] === max) {
                winner.push(CarNames[i]);
            } else { break; }
        }
        return winner;
    }
}
export default PlayGame;