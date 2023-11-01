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
  
  toString() { // 출력 형식 메서드
    return `${this.name} : ${"-".repeat(this.position)}`; // 자동차 이름, 위치 문자열로 반환
   } /*템플릿 리터럴은 ES6(ES2015)에서 도입된 기능으로, 문자열을 보다 편리하게 다룰 수 있게 해줍니다.
   템플릿 리터럴은 백틱(``)으로 감싸진 문자열입니다. 이 안에서 ${}를 사용하여 변수나 표현식을 문자열에 삽입할 수 있습니다.
   예를 들어, ${this.name}은 this.name의 값을 문자열로 변환하고, ${"-".repeat(this.position)}은 - 문자를 this.position의 값만큼 반복한 문자열을 생성합니다. */
} //car class 닫음

// App class 정의
class App { 
  constructor() {
    this.cars = []; // 자동차 객체 배열
    this.rounds = 0; // 시도할 횟수
    this.winners = []; // 우승자 배열
  }

  async play() { // 게임 시작 메서드
    await this.inputCars(); // 자동차 이름 입력 받기
    await this.inputRounds(); // 시도할 횟수 입력 받기

    Console.print("\n실행 결과"); // 실행 결과 출력 시작
    this.runGame(); // 게임 실행
    this.findWinners(); // 우승자 찾기
    this.showWinners(); // 우승자 출력
  }

  async inputRounds() { // 시도할 횟수 입력 받기
    const roundInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    ); // 콘솔에서 시도할 횟수 입력 받기
    const rounds = Number(roundInput); // 숫자로 변환
    this.validateRound(rounds); // 횟수 유효성 검사
    this.rounds = rounds; // rounds에 저장
  }

  findWinners() { // 우승자 찾기 메서드
    const maxPosition = Math.max(...this.cars.map((car) => car.position)); // 최대 위치 값 구하기
    this.winners = this.cars.filter((car) => car.position === maxPosition); // 최대 위치와 같은 자동차들을 우승자 배열에 추가
  }

  showWinners() { // 우승자 출력 메서드
    const winnerNames = this.winners.map((car) => car.name); // 우승자들의 이름 배열 찾기
    Console.print(`최종 우승자 : ${winnerNames.join(", ")}`); // 우승자들의 이름을 쉼표로 구분하여 출력 //이게 맞나...?ㅜㅜ
  }

} // App class 닫음

async function inputCars() { // 자동차 이름 입력 받기 메서드
  const carNames = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  ); // 콘솔에서 자동차 이름 입력 받기
  const names = carNames.split(","); // 쉼표로 구분하여 배열로 변환
  for (const name of names) {
    this.validateName(name); // 이름 유효성 검사
    const car = new Car(name); // Car 객체 생성
    this.cars.push(car); // cars 배열에 추가
  }
}

function validateName(name) { // 이름 유효성 검사
  if (name.length > 5) {
    throw new Error("[ERROR] 이름은 5자 이하만 가능합니다."); // 이름이 5자 초과면 에러 발생
  }
}
function validateRound(rounds) { // 횟수 유효성 검사
  if (isNaN(rounds) || rounds < 1) {
    throw new Error("[ERROR] 횟수는 1 이상의 자연수만 가능합니다."); // 횟수가 자연수가 아니면 에러 발생
  }
}
function runGame() { // 게임 실행 메서드
  for (let i = 0; i < this.rounds; i++) {
    this.moveCars(); // 자동차들 전진
    this.showCars(); // 자동차들 출력
    Console.print(""); 
  }
}
function moveCars() { // 자동차들 전진 함수
  for (const car of this.cars) {
    car.moveForward(); // 각 자동차 전진
  }
}
function showCars() { // 자동차들 출력 함수
  for (const car of this.cars) {
    Console.print(car.toString()); // 각 자동차 출력 형식으로 출력
  }
}

export default App;

