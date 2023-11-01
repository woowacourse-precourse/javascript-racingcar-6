import { Console, Random } from '@woowacourse/mission-utils';
import Errors from './message/Errors.js';
import Messages from './message/Messages.js';

function check_name_validate(player_arr) {
  if (player_arr.length <= 1) throw new Error(Errors.SHORTAGE_ERROR);
  const player_name_set = new Set();

  player_arr.forEach((player_name) => {
    const trimmed_name = player_name.trim();

    if (trimmed_name === '') throw new Error(Errors.NAME_ERROR);
    if (trimmed_name.length > 5) throw new Error(Errors.LENGTH_ERROR);
    if (player_name_set.has(trimmed_name)) throw new Error(Errors.DUPLICATE_NAME_ERROR);

    player_name_set.add(trimmed_name);
  });
}
function check_number_validate(play_number) {
  if (!play_number.match(/^\d+$/)) {
    throw new Error(Errors.NUMBER_ERROR);
  }
}

class App {
  constructor() {
    this.Console = Console;
  }

  async play() {
    const players = [];
    await this.Console.readLineAsync(Messages.GAME_START).then((result) => {
      const player_input = result.split(',');
      check_name_validate(player_input);
      player_input.map((player_name) => players.push(player_name));
    });

    const play_number = await this.Console.readLineAsync(Messages.INSERT_COUNT);
    check_number_validate(play_number);
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
    } while (play_now < play_number);

    const players_arr = Object.entries(players_object);

    const winners = players_arr.reduce(
      (acc, [player_name, player_result]) => {
        if (player_result.length > acc.max) {
          return {
            max: player_result.length,
            players: [player_name],
          };
        }
        if (player_result.length === acc.max) {
          acc.players.push(player_name);
        }
        return acc;
      },
      { max: Number.MIN_SAFE_INTEGER, players: [] },
    );

    Console.print(`${Messages.FINAL_WINNER} ${winners.players.join(',')}`);
  }
}

export default App;

// const app = new App();
// app.play();
