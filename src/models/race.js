const MIN_TOTAL_ROUND = 0;
const START_ROUND = 0;

class Race {
	constructor() {
		this.totalRound = MIN_TOTAL_ROUND;
		this.currentRound = START_ROUND;
	}

	setTotalRound(round) {
		if (round <= MIN_TOTAL_ROUND) return;

		this.totalRound = round;
	}

	getTotalRound() {
		return this.totalRound;
	}

	checkIsRaceEnd() {
		return this.currentRound >= this.totalRound;
	}

	goNextRound() {
		if (this.checkIsRaceEnd()) return;

		this.currentRound += 1;
	}

	getCurrentRound() {
		return this.currentRound;
	}
}

export default Race;
