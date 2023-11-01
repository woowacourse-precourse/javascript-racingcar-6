import { GAME_MESSAGE } from '../constants/gameMessage.js';
import { MissionUtils } from '@woowacourse/mission-utils';

export default class Game {

    #winStandard
    #goStandard
    #gameResults

    constructor() {
        this.#gameResults = [];
        this.#goStandard = 4;
    }

    async run(carNames, count) {
        this.#winStandard = this.countWinStandard(count);
        
        MissionUtils.Console.print(GAME_MESSAGE.gameResult);

        for (let i = 0; i < count; i++) {
            const randomNumbers = await this.createRandomNumsersForCar(carNames.length);
            this.getGameResult(randomNumbers);
            this.printGameResult(carNames);
        }

        this.printGameWinner(carNames);
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
        if (randomNumber >= this.#goStandard) {
            this.#gameResults[index] = `${this.#gameResults[index] ? this.#gameResults[index] : ''}-`;
        }
    }

    printGameResult(carNames) {
        for (let i = 0; i < carNames.length; i++) {
            MissionUtils.Console.print(`${carNames[i]} : ${this.#gameResults[i] ? this.#gameResults[i] : ''}`);
        }
        MissionUtils.Console.print('');
    }

    printGameWinner(carNames) {
        MissionUtils.Console.print(`최종 우승자 : ${this.getGameWinner(carNames)}`);
    }

    getGameWinner(carNames) {
        const winner = [];

        for (let i = 0; i < carNames.length; i++) {
            this.getWinnerList(winner, i, carNames);
        }

        return winner;
    }

    getWinnerList(winner, index, carNames) {
        if (this.#gameResults[index] === this.#winStandard) {
            winner.push(carNames[index]);
        }
    }
}
