import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    try {
      const inp = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
      );
      const car_names = inp.split(',').map((e) => e.trim());
      validateCarNames(car_names);
      const game_cnt = Number(
        await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
      );
      validateGameCnt(game_cnt);
      let car_positions = new Array(car_names.length).fill(0);

      MissionUtils.Console.print('\n실행 결과');
      for (let i = 0; i < game_cnt; i++) {
        car_positions = oneGameStart(car_positions);
        printRacing(car_names, car_positions);
      }
      printWinner(car_names, car_positions);
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

const oneGameStart = (car_positions) => {
  const new_car_positions = [...car_positions];
  for (let i in new_car_positions) {
    if (isMoveForwardByRandom()) {
      new_car_positions[i]++;
    }
  }
  return new_car_positions;
};

const isMoveForwardByRandom = () => {
  const random = MissionUtils.Random.pickNumberInRange(1, 9);
  if (random >= 4) return true;
  return false;
};

const printRacing = (car_names, car_positions) => {
  let print_ary = [];

  for (let i = 0; i < car_names.length; i++) {
    print_ary.push(car_names[i] + ' : ' + '-'.repeat(car_positions[i]));
  }

  MissionUtils.Console.print(print_ary.join('\n') + '\n');
};

const printWinner = (car_names, car_positions) => {
  let winners = [];
  let max = -1;

  for (let i = 0; i < car_names.length; i++) {
    if (car_positions[i] > max) {
      winners = [car_names[i]];
      max = car_positions[i];
    } else if (car_positions[i] === max) {
      winners.push(car_names[i]);
    }
  }

  MissionUtils.Console.print('최종 우승자 : ' + winners.join(', '));
};

const validateGameCnt = (game_cnt) => {
  if (Number.isNaN(game_cnt))
    throw new Error('[ERROR] 입력이 숫자 형식이 아닙니다');
};

const validateCarNames = (car_names) => {
  for (let car_name of car_names) {
    if (car_name.length > 5)
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다');
  }
};

export default App;
