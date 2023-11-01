import Car from './Car.js';
import Input from './Input.js';

class Game {
  #cars = [];

  async play() {
    await this.setCars();
  }

  async setCars() {
    const input = new Input();
    // TODO: 사용자 입력 검증 로직 주입해주기
    const value = await input.readLine(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    // TODO: 쉼표로 구분된 자동자 이름를 배열로 변환해주는 유틸함수 작성
    this.#cars = value.split(',').map((name) => new Car(name));
  }
}

export default Game;
