import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../../constants/GameMessage.js';

const Input = (superClass) =>
	class extends superClass {
		static readDrivers() {
			return Console.readLineAsync(GAME_MESSAGE.readDrivers);
		}

		static readTryCount() {
			return Console.readLineAsync(GAME_MESSAGE.readTryCount);
		}
	};

export default Input;
