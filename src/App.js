class App {
    /* 
    * 클래스의 생성자 메서드
    * cars라는 빈 배열을 초기화
    * 경주에 참여하는 자동차 객체를 저장할 목적으로 사용
    **/
    constructor() {
      this.cars = [];
    }

  async play() {
    await this.inputCarNamesAsync();
  }

    /* 
    * 사용자로부터 자동차 이름을 입력받습니다.
    * 이 메서드에서 입력받은 자동차 이름은 5자 이하인지 확인한 후, 자동차 객체를 생성
    * this.cars 배열에 저장
    **/
    async inputCarNamesAsync() {
      const carNamesInput = await Console.readLineAsync("경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):");
      const carNames = carNamesInput.split(',').map(name => name.trim());
  
      this.cars = carNames.map(name => ({ name, position: 0 }));
    }
}

export default App;
