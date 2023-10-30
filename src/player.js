import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./message";

const player = await Console.readLineAsync(MESSAGE.RACING_CAR_NAME);
    
const player_array = player.split(',');
  const a = player_array.forEach(function (value, index) {
  if (player_array[index].length > 5) throw new Error(MESSAGE.ERROR);
  });

const REGEX = /[`~!@#$%^&*()_|+\-=?;:'".<>\{\}\[\]\\\/ ]/gim;
  if (player.includes(',') !== true &&
  REGEX.test(player) !== true &&
  player_array.length <= 1) {throw new Error(MESSAGE.ERROR)}; 

  export {player, player_array, a, REGEX};