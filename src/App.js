import { Console, MissionUtils } from '@woowacourse/mission-utils';

class App {
  start() {
    Console.print(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }

  async getCarNames() {
    const names = await Console.readLineAsync();

    const carNamesArray = (names || '').split(',').map((name) => name.trim());
    return carNamesArray;
  }

  nameException(carNamesArray) {
    if (this.hasDuplicates(carNamesArray)) {
      throw new Error('[ERROR] 올바른 값을 입력하세요');
    }
  }

  hasDuplicates(carNamesArray) {
    const uniqueNames = new Set(carNamesArray);
    return uniqueNames.size !== carNamesArray.length; // 다르면 참 반환
  }

  vaildateCarNamesLength(carNamesArray) {
    carNamesArray.forEach((name) => {
      if (name.length > 5) {
        throw new Error('[ERROR] 올바른 값을 입력하세요');
      }
    });
  }

  async tryCounts() {
    Console.print('시도할 횟수는 몇 회인가요?');
    const counts = parseInt(await Console.readLineAsync());
    if (isNaN(counts) || counts <= 0) {
      throw new Error('[ERROR] 올바른 값을 입력하세요');
    }
    return counts;
  }

  generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  async moveCarPositions(carNames, carPositions) {
    for (let i = 0; i < carNames.length; i++) {
      const name = carNames[i];
      const randomNumber = this.generateRandomNumber();
      if (randomNumber >= 4) {
        carPositions[name]++;
      }
    }
  }

  printResults(carNames, carPositions) {
    Console.print('실행 결과');
    carNames.forEach((name) => {
      Console.print(`${name}: ${'-'.repeat(carPositions[name])}`);
    });
  }

  async play() {
    this.start();
    while (true) {
      const carNames = await this.getCarNames();
      this.nameException(carNames);
      const counts = await this.tryCounts();
      const carPositions = {};
      for (const name of carNames) {
        carPositions[name] = 0;
      }
      try {
        for (let i = 0; i < counts; i++) {
          await this.moveCarPositions(carNames, carPositions);
          this.printResults(carNames, carPositions);
        }

        //차수별 실행결과
        this.printResults(carNames, carPositions);

        //우승자 찾기
        const winner = Math.max(...Object.values(carPositions));
        const jointWinner = Object.keys(carPositions).filter(
          (name) => carPositions[name] === winner,
        );

        if (jointWinner.length > 1) {
          Console.print(`최종 우승자: ${jointWinner.join(', ')}`);
        } else {
          Console.print(`최종 우승자: ${jointWinner[0]}`);
        }
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default App;
