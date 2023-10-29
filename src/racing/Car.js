import Util from '../util/Util.js';

class Car {
	#name;
	#forwardCount;

	constructor(_name, _forwardCount) {
		this.#name = _name;
		this.#forwardCount = _forwardCount;
	}

	tryMoveForward() {
		if (Util.isForward()) {
			this.#forwardCount += 1;
		}
	}

	getCarState() {
		return {
			name: this.#name,
			forwardCount: this.#forwardCount
		};
	}
}

export default Car;