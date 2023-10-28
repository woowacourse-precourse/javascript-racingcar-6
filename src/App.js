import { getUserName, getTrialFrequency } from './getValue';
import { playCarRace } from './playCarRace';
import { endGame } from './endGame';
class App {
	async play() {
		const userNameArr = await getUserName();
		const userTrialFrequency = await getTrialFrequency();
		const gameResult = playCarRace(userNameArr, userTrialFrequency);
		endGame(gameResult);
	}
}

export default App;
