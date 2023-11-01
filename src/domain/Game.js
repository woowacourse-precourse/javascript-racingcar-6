import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default class Game {

    constructor() {
        this.GO_STANDARD = 4;
        this.gameResults = [];
    }

    async run({ carNames, count }) {
        const winStandard = this.countWinStandard(count);
        
        for (let i = 0; i < count; i++) {
            const randomNumbers = await this.createRandomNumsersForCar(carNames.length);
            this.getGameResult(randomNumbers);
            this.printGameResult(carNames);
        }

        this.printGameWinner(winStandard, carNames);
    }

    countWinStandard(count) {
        let winStandard = '';

        for (let i = 0; i < count; i++) {
            winStandard = `${winStandard}-`;
        }

        return winStandard;
    }

    async createRandomNumsersForCar(randomNumberCount) {
        const randomNumbers = [];

        for (let i = 0; i < randomNumberCount; i++) {
            randomNumbers[i] = await MissionUtils.Random.pickNumberInRange(0, 9);
        }

        return randomNumbers;
    }

    getGameResult(randomNumbers) {
        for (let i = 0; i < randomNumbers.length; i++) {
            this.calculateGameResult(randomNumbers[i], i);
        }
    }

    calculateGameResult(randomNumber, index) {
        if (randomNumber > this.GO_STANDARD) {
            this.gameResults[index] = `${this.gameResults[index] ? this.gameResults[index] : ''}-`;
        }
    }

    printGameResult(carNames) {
        MissionUtils.Console.print(GAME_MESSAGE.gameResult);

        for (let i = 0; i < carNames.length; i++) {
            MissionUtils.Console.print(`${carNames[i]} : ${this.gameResults[i] ? this.gameResults[i] : ''}`);
        }
        MissionUtils.Console.print('');
    }

    printGameWinner(winStandard, carNames) {
        MissionUtils.Console.print(GAME_MESSAGE.gameResult);
        MissionUtils.Console.print(`최종 우승자 : ${this.getGameWinner(winStandard, carNames.length)}`);
    }

    getGameWinner(winStandard, count) {
        const winner = [];

        for (let i = 0; i < count; i++) {
            this.getWinnerList(winner, winStandard, i);
        }

        return winner;
    }

    getWinnerList(winner, winStandard, index) {
        if (this.gameResults[index] === winStandard) {
            winner.push(carNames[index]);
        }
    }
}
