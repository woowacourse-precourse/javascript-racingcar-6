import { Console } from '@woowacourse/mission-utils';
import { getResult, playGame, setGame } from './game/utils';
import { makeCars } from './game/model';

class App {
  async play() {
    const { car_list_input, play_time_input } = await setGame();
    const car_List = makeCars(car_list_input);
    playGame(car_List, play_time_input);
    const winner = getResult(car_List);
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default App;
