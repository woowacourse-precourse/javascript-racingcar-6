import { MissionUtils } from "@woowacourse/mission-utils";
import Message from "../constants/Message";

async function GetResults(cars, attempts) {
	let results = [];
	let maxHyphenCount = -1;
	const winners = [];

	for (let i = 0; i < cars.length; i++) {
		let steps = 0;
		for (let j = 0; j < attempts; j++) {
			const move = MissionUtils.Random.pickNumberInRange(0, 9);
			if (move >= 4) steps += 1;
		}

		results.push(cars[i] + " : " + "-".repeat(steps));

		if (steps > maxHyphenCount) {
			maxHyphenCount = steps;
			winners.length = 0;
			winners.push(cars[i]);
		} else if (steps === maxHyphenCount) winners.push(cars[i]);
	}

	for (const result of results) {
		await MissionUtils.Console.print(result);
	}

	await MissionUtils.Console.print(Message.WINNER_IS + winners.join(", "));

	return results;
}

export default GetResults;
