// Car class 정의
class Car { 
  constructor(name) {
    this.name = name; // 자동차 이름
    this.position = 0; // 자동차 위치
  }
  
  isForward() { // 전진 조건 판단
    const random = MissionUtils.Random.pickNumberInRange(0, 9); //0 ~ 9 사이의 정수 중 랜덤으로 한 개 반환
    return random >= 4; // 랜덤 값이 4 이상일 경우 true 반환
  }

  moveForward() { // 전진 메서드
    if (this.isForward()) {
      this.position++; // 자동차 위치 증가
    }
  }
} //car class 닫음

// App class 정의
class App { 
  constructor() {
    this.cars = []; // 자동차 객체 배열
    this.rounds = 0; // 시도할 횟수
    this.winners = []; // 우승자 배열
  }
  async play() { // 게임 시작 메서드
    /*자동차 이름, 시도할 횟수 입력받기, 이름 유효한지 체크하기
    실행결과 출력
    게임 시작
    우승자 찾기, 우승자 출력 */
    
    const carNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    ); // 콘솔에서 자동차 이름 입력 받기
    if (carNames.length > 5) {
      throw new Error("[ERROR] 이름은 5자 이하만 가능합니다."); // 이름이 5자 초과면 에러 발생
    }

    const roundInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    ); // 콘솔에서 시도할 횟수 입력 받기
    const rounds = Number(roundInput); // 숫자로 변환
    if (isNaN(rounds) || rounds < 1) {
      throw new Error("[ERROR] 횟수는 1 이상의 자연수만 가능합니다."); // 횟수가 자연수가 아니면 에러 발생
    }

    Console.print("\n실행 결과"); // 실행 결과 출력 시작
    this.runGame(); // 게임 실행
    this.findWinners(); // 우승자 찾기
    this.showWinners(); // 우승자 출력

  }
  
  runGame() { // 게임 실행 메서드
    for (let i = 0; i < this.rounds; i++) {
      for (const car of this.cars) {
        car.moveForward(); // 각 자동차 전진
      }  
      for (const car of this.cars) {
        Console.print(`${this.name} : ${"-".repeat(this.position)}`); // 각 자동차 출력 형식으로 출력
      }  
      Console.print(""); 
    } //헉 인덴트가 3개...!!!!!!!!!! NOOOOO
  }

  findWinners() { // 우승자 찾기 메서드
    const maxPosition = Math.max(...this.cars.map((car) => car.position)); // 최대 위치 값 구하기
    this.winners = this.cars.filter((car) => car.position === maxPosition); // 최대 위치와 같은 자동차들을 우승자 배열에 추가
  }

  showWinners() { // 우승자 출력 메서드
    const winnerNames = this.winners.map((car) => car.name); // 우승자들의 이름 배열 찾기
    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`); // 우승자들의 이름을 쉼표로 구분하여 출력 //이게 맞나...?ㅜㅜ
  }

}

export default App;

