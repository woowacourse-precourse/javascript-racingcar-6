import { getUserName, getTrialFrequency } from './getValue';
import { playCarRace } from './playCarRace';
import { endGame } from './endGame';
class App {
	async play() {
		const userNameArr = await getUserName();
		const userTrialFrequency = await getTrialFrequency();
		console.log('usertrialFrequency', userTrialFrequency);
		const gameResult = playCarRace(userNameArr, userTrialFrequency);
		endGame(gameResult);
		return;
	}
}

export default App;
