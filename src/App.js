import { isRandomNumberGreaterThanOrEqualFour } from './randomNumber.js';
import { getGameCount } from './getGameCount.js';
import { inputCarsNames } from './getCarNames.js';
import { Console } from '@woowacourse/mission-utils';
import { findWinner } from './findWinner.js';

class App {
    async play() {
        const carNames = await inputCarsNames();
        const gameCount = await getGameCount();

        const roundResults = {};

        for (const car of carNames) {
            roundResults[car] = '';
        }

        for (let i = 0; i < gameCount; i++) {
            const roundResult = {};

            for (const car of carNames) {
                roundResult[car] = roundResults[car] + (isRandomNumberGreaterThanOrEqualFour() ? '-' : '');
            }

            for (const car of carNames) {
                Console.print(car + ' : ' + roundResult[car]);
            }
            Console.print('');

            for (const car of carNames) {
                roundResults[car] = roundResult[car];
            }
        }

        const winners = findWinner(roundResults);
        Console.print('최종 우승자 : ' + winners.join(', '));
    }
}

export default App;
