import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    const START_GAME_MESSAGE = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)';
    const INPUT_MESSAGE = '시도할 횟수는 몇 회인가요?';
    const RESULT_MESSAGE = '실행 결과';
    const INVALID_INPUT_ERROR = '[ERROR] 자동차 이름이 잘못된 형식입니다.';

    MissionUtils.Console.print(START_GAME_MESSAGE);
    const carName = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);
    
    MissionUtils.Console.print(INPUT_MESSAGE);
    const tryNumber = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE);

    let carNameArray = carName.split(',');
    if(carNameArray.find((v) => v.length > 5)){
      throw new Error(INVALID_INPUT_ERROR);
    }
    const carCountArray = new Array(carNameArray.length).fill(0);
    
    MissionUtils.Console.print(RESULT_MESSAGE);

    while (carCountArray.filter((v) => v == tryNumber).length < 1) {
      const randomNumberArray = this.getRandomNumberArray(carNameArray.length);
      
      randomNumberArray.forEach((randomNumber, idx) => {
        if (randomNumber >= 4) {
          carCountArray[idx] += 1;
        }
      });

      carCountArray.forEach((count, idx) => {
        MissionUtils.Console.print(`${carNameArray[idx]} : ${this.getHyphen(count)}`);
      });
    }
    
    const winners = carNameArray.filter((_, idx) => carCountArray[idx] === tryNumber);

    MissionUtils.Console.print(`최종 우승자: ${winners.join()}`);
  }

  getRandomNumberArray(length) {
    return Array.from({ length }, () => this.getRandomNumber());
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  getHyphen(number) {
    return '-'.repeat(number);
  }

}

export default App;