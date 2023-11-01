import { Console, Random } from '@woowacourse/mission-utils';

class App {
  async play() {
    await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    ).then(async (cars) => {
      const carArr = cars.split(',');

      const map = new Map();
      carArr.forEach((car) => map.set(car, 0));

      await Console.readLineAsync('시도할 횟수는 몇회인가요?\n').then((repeatNumber) => {
        Console.print('\n실행 결과');

        [...Array(parseInt(repeatNumber))].forEach(() => {
          carArr.forEach((car) => {
            const randomNum = Random.pickNumberInRange(0, 9);
            if (randomNum >= 4) {
              map.set(car, map.get(car) + 1);
            }

            Console.print(`${car} : ${'-'.repeat(map.get(car))}`);
          });
          Console.print('\n');
        });

        const winners = [];
        const sortCars = [...map].sort((a, b) => b[1] - a[1]);
        const max = sortCars[0][1];

        sortCars.forEach(([car, carNum]) => {
          if (carNum === max) {
            winners.push(car);
          }
        });

        Console.print(`최종 우승자 : ${winners.join(', ')}`);
      });
    });
  }
}

export default App;
