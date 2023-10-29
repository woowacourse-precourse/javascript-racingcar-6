import tryCountValidation from '../utils/validation/tryCountValidation.js';

class TryCounter {
	#tryCount;
	#currentTryCount;

	constructor() {
		this.#currentTryCount = 0; // 시도 횟수 초기화
	}

	initTryCount(tryCountStr) {
		tryCountValidation(tryCountStr);

		this.#tryCount = parseInt(tryCountStr);
	}

	singleTry() {
		this.#currentTryCount++;
	}

	isEnd() {
		return this.#currentTryCount >= this.#tryCount;
	}
}

export default TryCounter;
