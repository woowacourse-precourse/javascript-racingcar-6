import { getUserName, getTrialFrequency } from './getValue';
import { playCarRace } from './playCarRace';
import { endGame } from './endGame';
import { Console } from '@woowacourse/mission-utils';
class App {
	async play() {
		const userNameArr = await getUserName();
		Console.print(userNameArr.join(','));
		const userTrialFrequency = await getTrialFrequency();
		Console.print(userTrialFrequency);
		const gameResult = playCarRace(userNameArr, userTrialFrequency);
		endGame(gameResult);
		return;
	}
}

export default App;
