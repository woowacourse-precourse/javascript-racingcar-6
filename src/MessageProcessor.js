import { Console } from '@woowacourse/mission-utils';

class MessageProcessor {
  static inputCarNames() {
    return Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );
  }

  static inputTryCount() {
    return Console.readLineAsync('시도할 회수는 몇회인가요?');
  }

  static result() {
    Console.print('실행 결과');
  }

  static progress(cars) {
    const progress = cars.map(
      car => `${car.name} : ${'-'.repeat(car.position)}`,
    );
    Console.print(progress.join('\n'));
  }

  static winners(winners) {
    const winnersName = winners.map(car => car.name).join(', ');
    Console.print(`최종 우승자: ${winnersName}`);
  }
}

export default MessageProcessor;
