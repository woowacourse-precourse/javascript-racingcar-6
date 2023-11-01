import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

const Output = (superClass) =>
	class extends superClass {
		static printResultHeader() {
			Console.print(GAME_MESSAGE.resultHeader);
		}

		static printAllLocations(drivers) {
			drivers.forEach((driver) => this.printLocation(driver.name, driver.location));

			Console.print(GAME_MESSAGE.newLine);
		}

		static printLocation(name, location) {
			const locationVisualization = GAME_MESSAGE.moveMark.repeat(location);

			Console.print(`${name} ${GAME_MESSAGE.resultDelimiter} ${locationVisualization}`);
		}

		static printWinnerNames(winnerNames) {
			const joinWinnerNames = winnerNames.join(GAME_MESSAGE.clearNameDelimiter);

			Console.print(`${GAME_MESSAGE.winner}${joinWinnerNames}`);
		}
	};

export default Output;
