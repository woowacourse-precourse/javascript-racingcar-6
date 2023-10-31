// @ts-check

import { Console } from '@woowacourse/mission-utils';
import { getUserName, getTrialFrequency } from './getValue';
import playCarRace from './playCarRace';
import endGame from './endGame';

class App {
	async play() {
		/** @type {string[]} */
		const userNameArr = await getUserName();
		Console.print(userNameArr.join(','));
		/** @type {number} */
		const userTrialFrequency = await getTrialFrequency();
		Console.print(userTrialFrequency);
		/** @type {Object.<string,number>} */
		const gameResult = playCarRace(userNameArr, userTrialFrequency);
		endGame(gameResult);
	}
}

export default App;
