import { Console } from "@woowacourse/mission-utils";
import { Race } from "./class";

class App {
  async play() {
    const race = new Race();
    
    await race.getRacer();
    await race.getTimes();

    await race.doRace();
  }
}

export default App;
