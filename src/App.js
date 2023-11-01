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
  async play() {}
}

export default App;

