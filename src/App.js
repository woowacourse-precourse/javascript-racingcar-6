import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
	constructor(name)
	{
		this.name = name;
		this.pos = 0;
	}
	race()
	{
		if (MissionUtils.Random.pickNumberInRange(0, 9) > 3)
            this.pos++;
	}
	printStatus()
	{
		MissionUtils.Console.print(this.name + ' : ' + '-'.repeat(this.pos));
	}

}

class App {

findWinner(cars)
{
	const max = Math.max(...cars.map((car) => car.pos));
	MissionUtils.Console.print(max);

}

printResult(cars)
{
	findWinner(cars);
}

async racingGame()
{
	let players = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
	let round = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

	let playerArr = players.split(",");

	let cars = [];
	for (let player of playerArr)
	{
		if (player.length > 5)
			throw new Error("[Error] 5글자 이상의 이름을 입력하세요.");

		let car = new Car(player);
		cars.push(car);
	}
	for (let i = 0 ; i < round ; i++)
	{
		for (let car of cars)
		{
			car.race();
			car.printStatus();
		}
		MissionUtils.Console.print("");
	}
	//for (let car of cars)
	//{
	//	await MissionUtils.Console.print(car.name);

	//}
	//await MissionUtils.Console.print(round);
	this.findWinner(cars);
}

  async play() {
	this.racingGame();
  }
}

export default App;
