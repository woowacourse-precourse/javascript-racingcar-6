import { pickNumberInRange } from "../utils/missionUtils.js";

class Car {
	/**
	 * @type string
	 */
	#name;

	/**
	 * @type number[]
	 */
	#movingDistances;

	constructor(name) {
		this.#name = name;
		this.#movingDistances = [];
	}

	getName() {
		return this.#name;
	}

	/**
	 *
	 * @param {number} round 몇 라운드인지
	 * @returns {number} 지금 라운드까지 얼마나 갔는지
	 */
	getMovingDistance(round) {
		let movingDistance = 0;
		for (let i = 0; i <= round; i += 1) {
			movingDistance += this.#movingDistances[i];
		}

		return movingDistance;
	}

	/**
	 *
	 * @param {number} round 몇라운드인지
	 */
	move(round) {
		this.#saveMovingDistance(round, this.#countMovingDistance());
	}

	#saveMovingDistance(round, movingDistance) {
		this.#movingDistances[round] = movingDistance;
	}

	#countMovingDistance() {
		return pickNumberInRange(0, 9) < 4 ? 0 : 1;
	}
}

export default Car;
