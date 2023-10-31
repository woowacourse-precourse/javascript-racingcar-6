import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

const Output = (superClass) =>
	class extends superClass {
		static printResultHeader() {
			Console.print(GAME_MESSAGE.resultHeader);
		}

		static printAllLocations(curLocations) {
			const objArr = Object.entries(curLocations);

			objArr.forEach(([name, curLocation]) => this.printLocation(name, curLocation));

			Console.print(GAME_MESSAGE.newLine);
		}

		static printLocation(name, currentLocation) {
			const locationVisualization = GAME_MESSAGE.moveMark.repeat(currentLocation);

			Console.print(
				`${name} ${GAME_MESSAGE.resultDelimiter} ${locationVisualization}` // name : ---
			);
		}

		static printWinnerNames(winnerNames) {
			const joinWinnerNames = winnerNames.join(GAME_MESSAGE.clearNameDelimiter);

			Console.print(`${GAME_MESSAGE.winner}${joinWinnerNames}`);
		}
	};

export default Output;
