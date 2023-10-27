class App {
	// 게임 시작
	async start() {
		const inputCars = await Console.readLineAsync(MESSAGE.start);
		this.getCars(inputCars);
	}

	// 자동차 이름 받고 분리하기
	getCars(input) {
		const cars = input.split(',').map((element) => ({
			name: element,
			count: '',
		}));
		this.racing(cars);
	}
	
	// 입력받은 시도횟수만큼 전진/정지
	async racing(cars) {
		const tryCount = await Console.readLineAsync(MESSAGE.race);
		console.log('시도횟수: ', tryCount);
		Console.print('실행 결과');
		for (let i = 0; i < tryCount; i++) {
			const carsNumber = getCarsNumber(cars.length);
			this.addReps(cars, carsNumber);
			this.printCars(cars);
		}
		this.winner(cars);
	}
	//전진/정지 판단
	addReps(cars, carsNumber) {}
	//단계별 진행상황 출력
	printCars(cars) {}
	// 우승자 출력
	winner(cars) {}

	async play() {
		this.start();
	}
}

export default App;
