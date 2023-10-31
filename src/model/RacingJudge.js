class RacingJudge {
	// 한번 순회할때 결정하는게 좋겠다.
	// 오름차순으로 정렬해 주는게 좋겠다. 결과로 사용할 수 있으니
	getWinnerNames(drivers) {
		const winnerNames = new Set(); // clear로 쉽게 비우기 위해 set사용함
		let maxScore = -Infinity; //

		Object.entries(drivers).forEach(([name, finalLocation]) => {
			if (finalLocation > maxScore) {
				winnerNames.clear();
				winnerNames.add(name);
				maxScore = finalLocation;
			} else if (finalLocation === maxScore) winnerNames.add(name);
		});

		return [...winnerNames];
	}
}

export default RacingJudge;
