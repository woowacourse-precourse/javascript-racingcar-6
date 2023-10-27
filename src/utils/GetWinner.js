const GetWinner = (cars) => {
	const winnerScore = Math.max(
		...cars.map((element) => {
			return element.count.length;
		})
	);

	const winnerList = cars
		.filter((element) => element.count.length === winnerScore)
		.map((car) => car.name)
		.join(', ');

	Console.print(MESSAGE.end + winnerList);
};
