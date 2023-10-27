class App {
	// 게임 시작
	async start() {}
	// 자동차 이름 받고 분리하기
	getCars(input) {}
	// 입력받은 시도횟수만큼 전진/정지
	async racing(cars) {}
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
