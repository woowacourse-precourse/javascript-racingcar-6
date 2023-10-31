import { MESSAGE, inputData } from "./Data.js";
import Controller from "./Controller.js";
import { Console } from "@woowacourse/mission-utils";

class App {
    async play() {
        inputData.player = await Controller.setPlayer();
        inputData.number = await Controller.setNumber();

        Console.print(MESSAGE.PROGRESS_RESULT);
        for (let i = 0; i < inputData.number; i++) {
            Controller.raceProgress(inputData.player);
            Console.print(Controller.getRaceResultText(inputData.player));
        }
        Console.print(Controller.getWinnerText(inputData.player));
    }
}

export default App;
