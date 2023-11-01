class RacingJudge {
	// 한번 순회할때 결정하는게 좋겠다.
	// 오름차순으로 정렬해 주는게 좋겠다. 결과로 사용할 수 있으니
	getWinnerNames(drivers) {
		const winnerNames = new Set(); // clear로 쉽게 비우기 위해 set사용함
		let maxScore = -Infinity; //

		drivers.forEach((driver) => this.#updateWinnerNames(driver, winnerNames, maxScore));

		return [...winnerNames.sort()];
	}

	#updateWinnerNames(driver, winnerNames, maxScore) {
		if (driver.location > maxScore) {
			winnerNames.clear();
			winnerNames.add(driver.name);
			maxScore = driver.location;
		} else if (driver.location === maxScore) winnerNames.add(driver.name);
	}
}

export default RacingJudge;
