import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants.js'
import { nameValidation } from './utils/validation.js';

class App {
  #gameData = {}
  #repeatCount

// 사용자로부터 자동차 이름을 입력받는다.
// 자동차 이름은 쉼표로 구분된다.
// 이름이 5자를 초과할 경우 throw문을 사용해 error를 발생시키고 애플리케이션을 종료한다.
  async setGameData() {
    const playerNameInput = await Console.readLineAsync(MESSAGE.nameQuery);
    await playerNameInput.split(',')
        .map((name) => name.trim())
        .map(nameValidation)
        .forEach((name) => this.#gameData[name] = { position: 0 });
  }

// 사용자로부터 이동 횟수를 입력받는다.
  async setRepeatCount() {
    const repeatCountInput = await Console.readLineAsync(MESSAGE.numberQuery);
    this.#repeatCount = Number(await repeatCountInput);
  }

// 각 차수별 실행 결과를 출력한다.
// 각 자동차는 0~9 사이 무작위 값을 구해 그 값이 4 이상일 경우 전진한다.
// 모든 자동차의 전진 현황을 "이름 : --" 의 형식으로 출력한다.
// 최종 우승자를 출력한다.
// 우승자가 여러 명인 경우 쉼표로 구분해 같이 출력한다.

  async play() {
    await this.setGameData();
    await this.setRepeatCount();
    Console.print('');
    Console.print(MESSAGE.gameStart);

    Console.print(this.#gameData);
    Console.print(this.#repeatCount);
  }
}

export default App;
