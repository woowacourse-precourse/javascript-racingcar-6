import { MissionUtils, Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    // 경주할 자동차 이름을 입력 받는 부분
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분):'
    );
    const carNames = carNamesInput.split(',');
    if (
      carNamesInput.indexOf(',') == -1 ||
      carNames.length == 1 ||
      carNames.length == 0
    ) {
      throw new Error('[ERROR] 올바른 선택이 아닙니다.');
    }
    for (let i = 0; i < carNames.length; i++) {
      console.log(carNames[i].length);
      if (carNames[i].length > 5) {
        console.log('!');
        throw new Error('[ERROR] 올바른 선택이 아닙니다.');
      }
    }

    // 시도 횟수를 입력 받는 부분
    const tryCountInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요? :'
    );
    const tryCount = parseInt(tryCountInput);
    const carPositions = {};

    // 경주 시작
    for (let i = 0; i < tryCount; i++) {
      for (const carName of carNames) {
        const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
        if (randomValue >= 4) {
          // 4 이상일 때 전진
          carPositions[carName] = (carPositions[carName] || '') + '-';
        } else {
          carPositions[carName] = carPositions[carName] || '';
        }
      }

      // 각 차수별 실행 결과 출력
      Console.print('\n');
      for (const carName of carNames) {
        Console.print(`${carName} : ${carPositions[carName] || ''}`);
      }
    }

    // 경주 결과를 확인하여 우승자 결정
    const maxPosition = Math.max(
      ...Object.values(carPositions).map((position) => position.length)
    );
    const winners = carNames.filter(
      (carName) =>
        carPositions[carName] && carPositions[carName].length === maxPosition
    );

    // 우승자 출력
    if (winners.length === 1) {
      Console.print(`\n최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`\n최종 우승자 : ${winners.join(', ')}`);
    }
  }
}

export default App;

const app = new App();
app.play();
