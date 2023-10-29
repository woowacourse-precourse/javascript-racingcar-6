import { Console, Random } from '@woowacourse/mission-utils';

function check_validate(player_arr) {
  player_arr.forEach((player_name) => {
    if (player_name.trim() === '') {
      throw new Error('[ERROR] 제대로 된 플레이어 이름 양식에 맞지 않습니다.');
    }
    if (player_name.length > 5) {
      throw new Error('[ERROR] 플레이어의 이름은 다섯 글자 이하만 가능합니다.');
    }
  });
}

class App {
  constructor() {
    this.Console = Console;
  }

  async play() {
    const players = [];
    await this.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)').then((result) => {
      const player_input = result.split(',');
      check_validate(player_input);
      player_input.map((player_name) => players.push(player_name));
    });

    const play_number = await this.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    let play_now = 0;
    const players_object = players.reduce(
      (obj, player) => ({
        ...obj,
        [player]: [],
      }),
      {},
    );

    do {
      players.forEach((player_name) => {
        const random_number = Random.pickNumberInRange(0, 9);
        if (random_number <= 4) players_object[player_name].push('-');
        Console.print(`${player_name} : ${players_object[player_name].join('')}`);
      });
      play_now += 1;
    } while (play_now === play_number);
    const findLongestArray = (obj) => {
      let longestArray = [];
      let longestArrayKey = null;

      Object.entries(obj).forEach(([key, value]) => {
        if (Array.isArray(value) && value.length > longestArray.length) {
          longestArray = value;
          longestArrayKey = key;
        }
      });

      return longestArrayKey;
    };
    const winner = findLongestArray(players_object);
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;

const app = new App();
app.play();
