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
            this.calculateGameResult(carNames, this.gameResults, randomNumbers);
            this.printGameResult(carNames, this.gameResults)
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

    calculateGameResult(carNames, gameResults, randomNumbers) {
        for (let i = 0; i < carNames.length; i++) {
            const randomNumber = randomNumbers[i];

            if (randomNumber > this.GO_STANDARD) {
                const result = `${gameResults[i] ? gameResults[i] : ''}-`;
                gameResults[i] = result;
            }
        }
    }

    printGameResult(carNames, gameResults) {
        MissionUtils.Console.print(GAME_MESSAGE.gameResult);

        for (let i = 0; i < carNames.length; i++) {
            MissionUtils.Console.print(`${carNames[i]} : ${gameResults[i] ? gameResults[i] : ''}`);
        }
        MissionUtils.Console.print('');
    }

    printGameWinner(winStandard, carNames) {
        MissionUtils.Console.print(GAME_MESSAGE.gameResult);

        const winner = [];

        for (let i = 0; i < carNames.length; i++) {
          if (this.gameResults[i] === winStandard) {
            winner.push(carNames[i]);
          }
        }
    
        MissionUtils.Console.print(`최종 우승자 : ${winner}`);
    }
}