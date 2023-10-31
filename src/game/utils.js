import { Console, Random } from '@woowacourse/mission-utils';
import { validateNameList } from './validate';

export async function setGame() {
  const car_list_input = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  validateNameList(car_list_input);
  const play_time_input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  return { car_list_input, play_time_input };
}

export function playGame(car_list, time) {
  Console.print('실행결과');

  let cur_time = 0;
  while (cur_time < time) {
    moveOnce(car_list);
    cur_time += 1;
  }
}

export function getResult(car_list) {
  let winner = [];
  car_list.forEach((car, idx) => {
    if (idx === 0 || winner[0].distance < car.distance) {
      winner = [car];
    } else if (winner[0].distance === car.distance) {
      winner.push(car);
    }
  });
  return winner.map((car) => car.name).join(',');
}

const moveOnce = (car_list) => {
  car_list.forEach((car) => {
    const num = Random.pickNumberInRange(0, 9);
    if (num >= 4) {
      car.move();
    }
  });
  const result = car_list.map((car) => car.getDistance()).join('\n');
  Console.print(`${result}\n`);
};
