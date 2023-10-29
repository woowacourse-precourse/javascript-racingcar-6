import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  racingProgress(cars, result) {
    Console.print('\n실행결과')
    result.map((round) => {
      cars.map((car, idx) => {
        Console.print(`${car} : ${'-'.repeat(round[idx])}`);
      })
      console.log('-'.repeat('\n'));
    })
  }
}

export default OutputView;