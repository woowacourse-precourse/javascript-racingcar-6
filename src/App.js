import Data from "./Data.js";
import Controller from "./Controller.js";
import { Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        Data.input.player = await Controller.setPlayer();
        Data.input.number = await Controller.setNumber();

        Console.print(Data.MESSAGE.PROGRESS_RESULT);
        for (let i = 0; i < Data.input.number; i++) {
            Controller.raceProgress(Data.input.player);
            Console.print(Controller.getRaceResultText(Data.input.player));
        }
        Console.print(Controller.getWinnerText(Data.input.player));
    }
}

export default App;
