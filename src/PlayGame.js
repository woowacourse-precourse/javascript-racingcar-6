import { MissionUtils } from "@woowacourse/mission-utils";

class PlayGame {
    setRandomNumber() {
        return MissionUtils.Random.pickNumberInRange(1, 9);
    }
    
    //랜덤숫자를 받고 출력할 '-' 의 개수를 count하는 함수
    async getStepForward(carNames, count) {
        let carRandom = new Array();
        for (let i = 0; i < carNames.length; i++) {
            carRandom.push(this.setRandomNumber());
            if (carRandom[i] > 3) {
                count[i]++;
            }
        }
        return count;
    }

    async displayResult(carNames, count) {
        for (let j = 0; j < carNames.length; j++) {
            MissionUtils.Console.print(carNames[j] + ' : ' + '-'.repeat(count[j]));
        }
    }

    async pickWinner(carNames, count) {
        const max = Object.keys(count).reduce(function (m, k) { return count[k] > m ? count[k] : m }, -Infinity);
        // let winner = new Array();
        let winner = "";
        for (let i = 0; i < carNames.length; i++) {
            if (count[i] === max) {
                // winner.push(carNames[i]);
                winner = this.stringParser(winner, carNames[i]);
            }
        }
        return winner;
    }

    stringParser(winner, carNames) {
        if (winner === "") {
            winner = carNames
        } else {
            winner = winner.concat(`, ${carNames}`);
        }
        return winner;
    }
}
export default PlayGame;