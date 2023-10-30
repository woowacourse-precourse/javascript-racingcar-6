import { Console } from '@woowacourse/mission-utils';
import { RacingCar } from './RacingCar.js';

class App {
  async play() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArray = makeNameArray(carNames);
    const carObjectArray = carNameArray.map((name) => new RacingCar(name));

    const chanceInput =
      await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    const gameChance = parseInt(chanceInput, 10);

    Console.print('\n실행결과');
    for (let i = 0; i < gameChance; i++) {
      carObjectArray.forEach((car) => {
        car.moveOrStay();
      });

      printResult(carObjectArray);
    }
    const winners = findWinner(carObjectArray);
    printWinner(winners);
  }
}

function makeNameArray(names) {
  const splittedNames = names.split(',');

  for (const name of splittedNames) {
    if (name.trim().length !== name.length)
      throw new Error('[ERROR] 이름에 공백이 있습니다.');
    if (name.length > 5)
      throw new Error('[ERROR] 이름은 5 글자를 초과할 수 없습니다.');
  }
  return splittedNames;
}

function printResult(carArray) {
  carArray.forEach((car) => {
    Console.print(`${car.name} : ${'-'.repeat(car.moveCount)}`);
  });
  Console.print('');
}

function findWinner(carArray) {
  const maxMoveCount = Math.max(...carArray.map((car) => car.moveCount));
  const winnerArray = carArray
    .filter((car) => car.moveCount === maxMoveCount)
    .map((car) => car.name);
  return winnerArray;
}

function printWinner(winnerArray) {
  const concatenatedName = winnerArray.join(', ');
  Console.print(`최종 우승자 : ${concatenatedName}`);
}

export default App;
